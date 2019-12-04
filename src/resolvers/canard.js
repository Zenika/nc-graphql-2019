module.exports = {
  mare: (root, args, context) => {
    return context.prisma.canard({id: root.id}).mare()
  }
}
