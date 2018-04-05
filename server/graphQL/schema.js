const db = require('../database/index.js');
const graphQLTools = require('graphql-tools');
const graphQLSubs = require('graphql-subscriptions');

const withFilter = graphQLSubs.withFilter;

const PubSub = require('graphql-subscriptions');

const pubsub = new PubSub.PubSub();

let tempMessages = {
  'fdb6af47-649a-4e83-8469-61cde9697c3b': ['I love you'],
};

const typeDefs = `
  type Query {
    user(id: String!): User
    allUsers: [User]
    listing(id: String!): Listing
    allListings(category: String): [Listing]
    problemMessages(id: String!): Messages
    nearByListings(longitude: Float, latitude: Float, radius: Int, category: String): [Listing]
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
    latitude: Float
    longitude: Float
  }

  type Message {
    id: String
    messages: [String]
  }

  type Messages {
    id: String
    messages: [String]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createListing(title: String!, description: String!, category: String!, location: String!): Listing!
    deleteUser(id: String!): User
    deleteListing(id: String!): Listing
    addMessage(id: String!, text: String!): Message
  }

  type Subscription {
    listingAdded: Listing
    messageAdded(id: String!): Message
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = {
  Query: {

    user: (obj, args, context) =>
      db.users.find({
      where: args,
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
    problemMessages: (obj, args, context) => {
      const messages = tempMessages[args.id] ? {id: args.id, messages: tempMessages[args.id]} : {id: args.id, messages: []};
      return messages;
    },
    nearByListings: (obj, args) => {
      const toRad = (value) => { return (value * Math.PI) / 180; };
      const filterByDistance = (userCoordinates, listingCoordinates, distance) => {
        const radius = 6731e3;
        if (userCoordinates[1] < 0) {
          userCoordinates[1] *= -1;
        }
        if (listingCoordinates[1] < 0) {
          listingCoordinates[1] *= -1;
        }
        // console.log(userCoordinates[0]);
        const userRadianLat = toRad(userCoordinates[0]);
        // console.log(listingCoordinates[0]);
        const listingRadianLat = toRad(listingCoordinates[0]);
        const distanceBetweenLat = toRad(listingCoordinates[0] - userCoordinates[0]);
        const distanceBetweenLong = toRad(listingCoordinates[1] - userCoordinates[1]);
        const haversineFormula =
        (Math.sin(distanceBetweenLat / 2) * Math.sin(distanceBetweenLat / 2)) +
        (Math.cos(userRadianLat) * Math.cos(userRadianLat) * Math.cos(listingRadianLat) *
        Math.sin(distanceBetweenLong / 2) * Math.sin(distanceBetweenLong / 2));
        const nextStep =
        2 * Math.atan2(Math.sqrt(haversineFormula), Math.sqrt(1 - haversineFormula));
        const result = nextStep * radius;
        // console.log('result', result, 'distance', distance);
        if (result <= distance) {
          return true;
        }
        return false;
      };
      if (args.latitude !== null && args.category) {
        return db.listings.findAll({
          where: {
            category: args.category,
          },
        })
          .then((listings) => {
            const filteredListings = [];
            for (let i = 0; i < listings.length; i += 1) {
              if (filteredListings.length === 25) {
                return filteredListings;
              }
              if (listings[i].dataValues.latitude) {
                if (filterByDistance(
                  [args.latitude, args.longitude],
                  [listings[i].dataValues.latitude, listings[i].dataValues.longitude],
                  args.radius * 1609.34
                )) {
                  filteredListings.push(listings[i]);
                }
              }
            }
            return filteredListings;
          });
      }
      if (args.latitude !== null) {
        // console.log(1);
        return db.listings.findAll()
          .then((listings) => {
            const filteredListings = [];
            for (let i = 0; i < listings.length; i += 1) {
              if (filteredListings.length === 25) {
                return filteredListings;
              }
              if (listings[i].dataValues.latitude) {
                if (filterByDistance(
                  [args.latitude, args.longitude],
                  [listings[i].dataValues.latitude, listings[i].dataValues.longitude],
                  args.radius * 1609.34
                )) {
                  filteredListings.push(listings[i]);
                }
              }
            }
            return filteredListings;
          });
      }
      // console.log(args);
      if (args.category) {
        return db.listings.findAll({
          where: {
            category: args.category,
          },
          limit: 25,
        });
      }
      return db.listings.findAll({ limit: 25 });
    },
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
    addMessage: (obj, args, context) => {
      if (tempMessages[args.id]) {
        tempMessages[args.id].push(args.text);
      } else {
        tempMessages[args.id] = [args.text];
      }
      let newMessage = {id: args.id, messages: [args.text]};
      pubsub.publish('messageAdded', { messageAdded: newMessage, id: args.id });
      return newMessage;
    }
  },
  Subscription: {
    listingAdded: {
      subscribe: () => pubsub.asyncIterator('listingAdded'),
    },
    messageAdded: {
      subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
        return payload.id === variables.id;
      }),
    }
  }
};

const schema = graphQLTools.makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
