module.exports = {
  poissons: (root, args, context) => {
    return context.prisma.mare.findOne({ where: { id: root.id } }).poissons();
  },
  canards: (root, args, context) => {
    return context.prisma.mare.findOne({ where: { id: root.id } }).canards();
  },
  plaine: (root, args, context) => {
    return context.prisma.mare.findOne({ where: { id: root.id } }).plaine();
  },
};
