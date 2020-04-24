module.exports = {
  mare: (root, args, context) => {
    return context.prisma.poisson.findOne({ where: { id: root.id } }).mare();
  },
};
