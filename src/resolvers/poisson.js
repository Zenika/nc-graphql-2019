module.exports = {
  mare: (root, args, context) => {
    return context.prisma.poisson({id: root.id}).mare()
  }
}
