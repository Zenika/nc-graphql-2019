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
      return context.prisma.mare({id: args.mareid}).canard({id: args.id})
    },
    canards: (root, args, context, info) => {
      return context.prisma.mare({id: args.mareid}).canards()
    },
    allCanards: (root, args, context, info) => {
      return context.prisma.canards()
    },
    allPoissons: (root, args, context, info) => {
      return context.prisma.poissons()
    },
    poissons: (root, args, context, info) => {
      return context.prisma.mare({id: args.mareId}).poissons()
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
    },
    addPoissons: (root, args, context) => {
      const poissonsCreated = []
      for (let i=1; i<= args.quantite; i++ ) {
        poissonsCreated.push(context.prisma.createPoisson({
          mare: {
            connect: { id: args.mareId }
          }
        }))
      }
      return poissonsCreated;
      
    }
  },
  Subscription: {
    nouveauCanard: {
      subscribe: (root, args, context) => {
        return context.prisma.$subscribe
          .canard({
            mutation_in: ["CREATED"],
            node: {
              id: args.mareId
            }
          })
          .node();
      },
      resolve: payload => {
        return payload;
      }
    }
  },
  Plaine: {
    mares: (root, args, context) => {
      return context.prisma.plaine({id: root.id}).mares()
    }
  },
  Mare: {
    poissons: (root, args, context) => {
      return context.prisma.mare({id: root.id}).poissons()
    },
    canards: (root, args, context) => {
      return context.prisma.mare({id: root.id}).canards()
    }
  },
  Canard: {
    mare: (root, args, context) => {
      return context.prisma.canard({id: root.id}).mare()
    }
  },
  Poisson: {
    mare: (root, args, context) => {
      return context.prisma.poisson({id: root.id}).mare()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
