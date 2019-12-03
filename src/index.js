const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.prisma.links()
    },
    link: (root, args, context, info) => {
      const links = context.prisma.links()
      return links.find((link) => link.id === args.id)
    },
    plaine: (root, args, context, info) => {
      return context.prisma.plaine()
    },
    mare: (root, args, context, info) => {
      const mares = context.prisma.plaine().mare()
      return mares.find((mare) => mare.id === args.id)
    },
    mares: (root, args, context, info) => {
      return context.prisma.plaine().mare()
    },
    canard: (root, args, context, info) => {
      const canards = context.prisma.plaine().mare({id: root.id}).canard()
      return canards.find((canard) => canard.id === args.id)
    },
    canards: (root, args, context, info) => {
      return context.prisma.plaine().mare().canard()
    },
    poisson: (root, args, context, info) => {
      const poissons = context.prisma.plaine().mare({id: root.id}).poisson()
      return poissons.find((poisson) => poisson.id === args.id)
    },
    poissons: (root, args, context, info) => {
      return context.prisma.plaine().mare({id: root.id}).poisson()
    }
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
    updateLink: (root, args, context) => {
      return context.prisma.updateLink({
        data: {
          url: args.url,
          description: args.description,
        },
        where: {
          id: args.id,
        }
      })
    },
    deleteLink: (root, args, context) => {
      return context.prisma.deleteLink({
          id: args.id,
      })
    },
    createPlaine: (root, args, context) => {
      return context.prisma.createPlaine()
    }
  },
  Link: { // implicit
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  Animal: {
    __resolveType(obj, context, info){
      if(obj.isAffame){
        return 'Canard';
      }

      if(obj.isGros || obj.isCanardvore){
        return 'Poisson';
      }

      return null;
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
