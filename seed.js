const path = require('path');
require('dotenv').config();
let seedData = require('./server/database/seedData');
let Sequelize = require('sequelize');
const config = require('./server/config.js');
const bCrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

let sequelize = new Sequelize(
  'get_fixed',
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.SQL_IP_ADDRESS,
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Models/tables
db.users = require('./server/models/users.js')(sequelize, Sequelize);
db.listings = require('./server/models/listings.js')(sequelize, Sequelize);

let casual = require('casual');

function createUsers(quantity) {
  const users = [];
  for (let i = 0; i <= quantity; i++) {
    const newEntry = {};
    newEntry.username = casual.username;
    newEntry.password = generateHash(123);
    newEntry.email = casual.email;
    newEntry.avg_rating = (Math.floor(Math.random() * 51) / 10).toString();
    newEntry.rating_count = casual.integer(from = 0, to = 100);
    newEntry.city = cities[Math.floor(Math.random() * 51)];
    newEntry.phone_number = casual.phone;
    users.push(newEntry);
  }
  return users;
}

const images = [
  'https://i.ytimg.com/vi/_10j1Xvl_wY/hqdefault.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41QTVzKddGL._US500_.jpg',
  'https://ae01.alicdn.com/kf/HTB1Jf1WklDH8KJjSspnq6zNAVXaG/Leicozic-Vi12-Professional-sound-mixer-12-channel-mixing-console-stage-church-mixer-de-audio-digital-recording.jpg_640x640.jpg',
  'https://fthmb.tqn.com/224yIyX6TLrll6puKQHXfH5pFnY=/960x0/filters:no_upscale()/closed-door-of-a-garage-121527652-588bd1fe5f9b5874eebc8919.jpg',
  'https://www.gardenzeus.com/wp-content/uploads/GZctorange-2.jpg',
  'https://d32c3oe4bky4k6.cloudfront.net/articles-videos/-/media/uscamediasite/images/story-images/2018/01/muscle-cars-scottsdale(10).ashx?modified=20180123160002&mw=1000&hash=F2EFE73081A00B6B316AA8663B84A77765E50181',
  'https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/41/246/84869831.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYDDNE7-lXvMuHLo4lB_h49v6GQBJwr2zhBhKFREtxeyzB597lA',
  'https://www.brainline.org/sites/default/files/styles/full_view_image/public/migrated//IMG_2553.jpg?itok=Dbht9Iwj',
  'https://i.pinimg.com/736x/e5/52/ef/e552ef43b440f1374f196da4f26fc5b1--optical-eyewear-nerd-girls.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4K6AhmquePXtXxXUXO18uPi9YVuDNFdse-ZKkCboYW2s9BFJaQ',
  'https://mobileimages.lowes.com/product/converted/693759/6937590200395.jpg',
];

const categories = [
  'electronics',
  'automotive',
  'handyman',
  'computers',
  'general labour',
  'specialty',
  'electrician',
  'free stuff',
];

const cities = [
  'San Francisco',
  'Los Angeles',
  'Sacramento',
  'Eureka',
  'San Diego',
  'Irvine',
  'Riverside',
  'Redlands',
  'Roseville',
  'Bakersville',
  'San Jose',
  'Santa Cruz',
  'Santa Barbara',
  'Monterrey',
  'Santa Monica',
  'Van Nuys',
  'Venice',
  'Fresno',
  'Long Beach',
  'Oakland',
  'Anaheim',
  'Santa Ana',
  'Stockton',
  'Chula Vista',
  'Fremont',
  'San Bernadino',
  'Modesto',
  'Fontana',
  'Oxnard',
  'Moreno Valley',
  'Huntington Beach',
  'Glendale',
  'Santa Clarita',
  'Oceanside',
  'Garden Grove',
  'Santa Rosa',
  'Ontario',
  'Elk Grove',
  'Corona',
  'Lancaster',
  'Palmdale',
  'Hayward',
  'Salinas',
  'Pomona',
  'Sunnyvale',
  'Escondido',
  'Torrance',
  'Pasadena',
  'Orange',
  'Fullerton',
];

const coordinates = {
  'San Francisco': {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  'Los Angeles': {
    latitude: 34.0522,
    longitude: -118.2437,
  },
  'Fullerton': {
    latitude: 34.0522,
    longitude: -117.9242,
  },
  'Pasadena': {
    latitude: 34.1478,
    longitude: -118.1445,
  },
  'Orange': {
    latitude: 33.7879,
    longitude: -117.8531,
  },
  'Torrance': {
    latitude: 33.8358,
    longitude: -118.3406,
  },
  'Escondido': {
    latitude: 33.1192,
    longitude: -117.0864,
  },
  'Sunnyvale': {
    latitude: 37.3688,
    longitude: -122.0363,
  },
  'Pomona': {
    latitude: 34.0551,
    longitude: -117.7500,
  },
  'Salinas': {
    latitude: 36.6777,
    longitude: -121.6555,
  },
  'Hayward': {
    latitude: 37.6688,
    longitude: -122.0808,
  },
  'Palmdale': {
    latitude: 34.5794,
    longitude: -118.1165,
  },
  'Lancaster': {
    latitude: 34.6868,
    longitude: -118.1542,
  },
  'Corona': {
    latitude: 33.8753,
    longitude: -117.5664,
  },
  'Elk Grove': {
    latitude: 38.4088,
    longitude: -121.3716,
  },
  'Ontario': {
    latitude: 34.0633,
    longitude: -117.6509,
  },
  'Santa Rosa': {
    latitude: 38.4404,
    longitude: -122.7141,
  },
  'Garden Grove': {
    latitude: 33.7743,
    longitude: -117.9380,
  },
  'Oceanside': {
    latitude: 33.1959,
    longitude: -117.3795,
  },
  'Santa Clarita': {
    latitude: 34.3917,
    longitude: -118.5426,
  },
  'Glendale': {
    latitude: 34.1425,
    longitude: -118.2551,
  },
  'Huntington Beach': {
    latitude: 33.6595,
    longitude: -117.9988,
  },
  'Moreno Valley': {
    latitude: 33.9425,
    longitude: -117.2297,
  },
  'Oxnard': {
    latitude: 34.1975,
    longitude: -119.1771,
  },
  'Fontana': {
    latitude: 34.0922,
    longitude: -117.4350,
  },
  'Modesto': {
    latitude: 37.6391,
    longitude: -120.9969,
  },
  'San Bernadino': {
    latitude: 34.1083,
    longitude: -117.2898,
  },
  'Fremont': {
    latitude: 37.5483,
    longitude: -121.9886,
  },
  'Chula Vista': {
    latitude: 32.6401,
    longitude: -117.0842,
  },
  'Stockton': {
    latitude: 37.9577,
    longitude: -121.2908,
  },
  'Santa Ana': {
    latitude: 33.7455,
    longitude: -117.8677,
  },
  'Anaheim': {
    latitude: 33.8366,
    longitude: -117.9143,
  },
  'Oakland': {
    latitude: 37.8044,
    longitude: -122.2711,
  },
  'Long Beach': {
    latitude: 33.7701,
    longitude: -118.1937,
  },
  'Fresno': {
    latitude: 36.7378,
    longitude: -119.7871,
  },
  'Venice': {
    latitude: 33.9850,
    longitude: -118.4695,
  },
  'Van Nuys': {
    latitude: 34.1899,
    longitude: -118.4514,
  },
  'Santa Monica': {
    latitude: 34.0195,
    longitude: -118.4912,
  },
  'Monterrey': {
    latitude: 36.6002,
    longitude: -121.8947,
  },
  'Santa Barbara': {
    latitude: 34.4208,
    longitude: -119.6982,
  },
  'Santa Cruz': {
    latitude: 36.9741,
    longitude: -122.0308,
  },
  'San Jose': {
    latitude: 37.3382,
    longitude: -121.8863,
  },
  'Bakersville': {
    latitude: 35.3733,
    longitude: -119.0187,
  },
  'Roseville': {
    latitude: 38.7521,
    longitude: -121.2880,
  },
  'Redlands': {
    latitude: 34.0556,
    longitude: -117.1825,
  },
  'Riverside': {
    latitude: 33.9806,
    longitude: -117.3755,
  },
  'Irvine': {
    latitude: 33.6846,
    longitude: -117.8265,
  },
  'San Diego': {
    latitude: 32.7157,
    longitude: -117.1611,
  },
  'Eureka': {
    latitude: 40.8021,
    longitude: -124.1637,
  },
  'Sacramento': {
    latitude: 38.5816,
    longitude: -121.4944,
  },
}

function createListing(userID) {
  // let listings = [];
  // for (var i = 0; i <= quantity; i++) {
  let newEntry = {};
  newEntry.user_id = userID;
  newEntry.title = casual.short_description;
  newEntry.description = casual.short_description;
  newEntry.category = categories[Math.floor((Math.random() * 9))];
  newEntry.location = cities[Math.floor(Math.random() * 51)];
  newEntry.image = images[Math.floor((Math.random() * 12))];
  newEntry.latitude = coordinates[newEntry.location].latitude;
  newEntry.longitude = coordinates[newEntry.location].longitude;
  // listings.push(newEntry);
  // }
  return newEntry;
}

const users = createUsers(15);
let listings = [];

users.forEach((user) => {
  db.sequelize.sync({force:true})
    .then(function() {
      return db.users.create(user);
    })
    .then(function(user) {
      let newListing = createListing(user.id);
      return db.listings.create(newListing);
    })
    .then(function(listing) {
      let newListing = createListing(listing.user_id);
      return db.listings.create(newListing);
    })
    .then(function(listing) {
      let newListing = createListing(listing.user_id);
      return db.listings.create(newListing);
    })
    // .then(function() {
    //   console.log(listings[0].point);
    // })
    // .then(function() {
    //   sequelize.close();
    // })
    .catch(function(err) {
      console.error(err);
      sequelize.close();
    });
});

// listings.forEach(function(listing) {
//   db.sequelize.sync({force:true})
//     .then(function() {
//       console.log(listings);
//       return db.listings.create(listing);
//     })
//     .then(function() {
//       sequelize.close();
//     })
//     .catch(function(err) {
//       console.error(err);
//       sequelize.close();
//     });
// });

// db.sequelize.sync({force: true})
//   .then(function() {
//     // Now instantiate an object and save it:
//     return db.users.create({username: 'Gkolb', password: '123', email: 'gkolb@yahoo.com'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return db.users.findAll({ where: {username: 'Gkolb'} });
//   })
//   .then(function(users) {
//     console.log(users[0].id, 'user[0]')
//     return db.listings.create({
//       user_id: users[0].id,
//       title: 'Broken Car',
//       description: 'My car is broken halp me',
//       category: 'Automotive',
//       location: 'Denver'
//     })
//   })
//   .then(function() {
//     sequelize.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain\
//     console.error(err);
//     sequelize.close();
//   });
