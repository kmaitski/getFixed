const path = require('path');

console.log('path', path.join(__dirname, '../../'));
require('dotenv').config({ path: path.join(__dirname, '../../') });

console.log('process', process.env.MONGO_PASSWORD);

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'getfixed',
  'root',
  process.env.MONGO_PASSWORD,
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
      underscored: true
    }
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/users.js')(sequelize, Sequelize);
db.listings = require('../models/listings.js')(sequelize, Sequelize);

db.sequelize
  .sync({ force: true })
  .then(() =>
    db.users.create({
      username: 'Gkolb',
      password: '123',
      email: 'gkolb@yahoo.com'
    })
  )
  .then(() => db.users.findAll({ where: { username: 'Gkolb' } }))
  .then(users => {
    console.log(users[0].id, 'user[0]');
    return db.listings.create({
      user_id: users[0].id,
      title: 'Broken Car',
      description: 'My car is broken halp me',
      category: 'Automotive',
      location: 'Denver'
    });
  })
  .then(() => {
    sequelize.close();
  })
  .catch(err => {
    console.error(err);
    sequelize.close();
  });
