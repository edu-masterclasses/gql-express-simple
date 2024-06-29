import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server-express';

// Define your type definitions (schema)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create the executable schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the Apollo Server
async function startApolloServer() {
  const server = new ApolloServer({ schema });

  // Initialize the Express application
  const app = express();

  // Start the Apollo server
  await server.start();

  // Apply the Apollo GraphQL middleware to the Express application
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the Express server
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

// Start the server
startApolloServer();