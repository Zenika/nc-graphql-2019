module.exports = {
  mares: (root, args, context) => {
    return context.prisma.plaine({id: root.id}).mares()
  }
}
