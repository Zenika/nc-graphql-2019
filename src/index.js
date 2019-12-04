const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const Subscription = require('./resolvers/subscription')
const Plaine = require('./resolvers/plaine')
const Mare = require('./resolvers/mare')
const Canard = require('./resolvers/canard')
const Poisson = require('./resolvers/poisson')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Plaine,
  Mare,
  Canard,
  Poisson
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
