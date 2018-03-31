const db = require('../database/index.js');
const graphQLTools = require('graphql-tools');

const PubSub = require('graphql-subscriptions');

const pubsub = new PubSub.PubSub();

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

  type Subscription {
    listingAdded: Listing
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = {
  Query: {
    user: (obj, args, context) => db.users.find({
      where: obj,
    }),
    allUsers: (obj, args, context) =>
      db.users.findAll(),
    listing: (obj, args, context) => db.listings.find({
      where: args,
    }),
    allListings: (obj, args, context) => db.listings.findAll({
      where: args,
      limit: 25,
    }),
  },
  Mutation: {
    createUser: (obj, args, context) => db.users.create(args),
    createListing: (obj, args, context) => {
      const newListing = db.listings.create(args);
      pubsub.publish('listingAdded', { listingAdded: newListing });
      return newListing;
    },
    deleteUser: (obj, args, context) => db.users.destroy({
    where: obj,
    }),
    deleteListing: (obj, args, context) => db.listings.destroy({
      where: obj,
    }),
  },
  Subscription: {
    listingAdded: {
      subscribe: () => pubsub.asyncIterator('listingAdded'),
    },
  },
};

const schema = graphQLTools.makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
