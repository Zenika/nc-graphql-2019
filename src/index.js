const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    plaine: (root, args, context, info) => {
      return context.prisma.plaine({id: args.id})
    },
    plaines: (root, args, context, info) => {
      return context.prisma.plaines()
    },
    mare: (root, args, context, info) => {
      return context.prisma.mare({id: args.id})
    },
    mares: (root, args, context, info) => {
      return context.prisma.plaine({id: args.plaineId}).mares()
    },
    canard: (root, args, context, info) => {
      return context.prisma.mare({id: root.mareid}).canard({id: args.id})
    },
    canards: (root, args, context, info) => {
      return context.prisma.canards()
    },
    poisson: (root, args, context, info) => {
      return context.prisma.mare({id: root.id}).poisson({id: args.id})
    },
    poissons: (root, args, context, info) => {
      return context.prisma.mare({id: root.mareId}).poissons()
    }
  },
  Mutation: {
    createPlaine: (root, args, context) => {
      return context.prisma.createPlaine({})
    },
    createMare: (root, args, context) => {
      return context.prisma.createMare({
        nom: args.nom,
        plaine: {
          connect: { id: args.plaineId }
        }
      })
    },
    addCanard: (root, args, context) => {
      return context.prisma.createCanard({
        nom: args.nom,
        mare: {
          connect: { id: args.mareId }
        }
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
