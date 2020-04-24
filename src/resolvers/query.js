module.exports = {
  plaine: (root, args, context, info) => {
    return context.prisma.plaine.findOne({ where: { id: args.id } });
  },
  plaines: (root, args, context, info) => {
    return context.prisma.plaine.findMany();
  },
};
