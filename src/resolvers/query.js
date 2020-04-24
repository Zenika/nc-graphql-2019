module.exports = {
  plaine: (root, args, context, info) => {
    return context.prisma.plaine.findOne({ where: { id: args.id } });
  },
  plaines: (root, args, context, info) => {
    return context.prisma.plaine.findMany();
  },
  mare: (root, args, context, info) => {
    return context.prisma.mare.findOne({ where: { id: args.id } });
  },
  mares: (root, args, context, info) => {
    return context.prisma.mare.findMany();
  },
  canard: (root, args, context, info) => {
    return context.prisma.canard.findOne({ where: { id: args.id } });
  },
  canards: (root, args, context, info) => {
    return context.prisma.canard.findMany();
  },
  poisson: (root, args, context, info) => {
    return context.prisma.poisson.findOne({ where: { id: args.id } });
  },
  poissons: (root, args, context, info) => {
    return context.prisma.poisson.findMany();
  },
};
