module.exports = {
  plaine: (root, args, context, info) => {
    return context.prisma.plaine.findOne({ where: { id: args.id } });
  },
};
