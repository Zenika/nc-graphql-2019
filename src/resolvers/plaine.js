module.exports = {
  mares: (root, args, context) => {
    return context.prisma.plaine.findOne({ where: { id: root.id } }).mares();
  },
};
