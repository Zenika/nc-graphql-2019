module.exports = {
  poissons: (root, args, context) => {
    return context.prisma.mare({id: root.id}).poissons()
  },
  canards: (root, args, context) => {
    return context.prisma.mare({id: root.id}).canards()
  }
}
