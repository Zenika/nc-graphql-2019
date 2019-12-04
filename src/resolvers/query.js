module.exports = {
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
}
