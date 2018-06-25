let Sequelize = require('sequelize');
const config = require('../config.js');

let sequelize = new Sequelize(
  'get_fixed',
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.SQL_IP_ADDRESS,
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

module.exports = db;
