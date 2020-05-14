const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query= require('./resolvers/Query');
const db = require('./db');

//create the graphql yoga server 

function createServer() {
    return new GraphQLServer({
        typeDefs: 'backend/src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, db })
    });
}

module.exports = createServer;