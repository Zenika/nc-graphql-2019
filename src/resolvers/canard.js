module.exports = {
  mare: (root, args, context) => {
    return context.prisma.canard.findOne({ where: { id: root.id } }).mare();
  },
};
