const db = require('../database/index.js');

const typeDefs = `
  type Query {
    user(id: String!): User
    allUsers: [User]
    listing(id: String!): Listing
    allListings(category: String): [Listing]
  }

  type User {
    id: String
    username: String
    email: String
    avg_rating: String
    rating_count: Int
    city: String
    phone_number: String
    num: String
  }

  type Listing {
    id: String
    user_id: String
    title: String
    description: String
    category: String
    location: String
    image: String
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createListing(title: String!, description: String!, category: String!, location: String!): Listing!
    deleteUser(id: String!): User
    deleteListing(id: String!): Listing
  }
`;

const resolvers = {
  user: (obj, args, context) => db.users.find({
    where: obj,
  }),
  allUsers: (obj, args, context) => db.users.findAll(),
  listing: (obj, args, context) => db.listings.find({
    where: obj,
  }),
  allListings: (obj, args, context) => db.listings.findAll({
    where: obj,
    limit: 25,
  }),
  createUser: (obj, args, context) => db.users.create(obj),
  createListing: (obj, args, context) => db.listings.create(obj),
  deleteUser: (obj, args, context) => db.users.destroy({
    where: obj,
  }),
  deleteListing: (obj, args, context) => db.listings.destroy({
    where: obj,
  }),
};

module.exports.typeDefs = typeDefs;
module.exports.resolver = resolvers;
