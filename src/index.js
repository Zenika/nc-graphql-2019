const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/query");
const Plaine = require("./resolvers/plaine");
const Mare = require("./resolvers/mare");
const Canard = require("./resolvers/canard");
const Poisson = require("./resolvers/poisson");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Plaine,
  Mare,
  Canard,
  Poisson,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
