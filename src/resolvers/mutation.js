module.exports = {
  createPlaine: (root, args, context) => {
    return context.prisma.createPlaine({})
  },
  createMare: (root, args, context) => {
    return context.prisma.createMare({
      nom: args.nom,
      plaine: {
        connect: { id: args.plaineId }
      }
    })
  },
  addCanard: (root, args, context) => {
    return context.prisma.createCanard({
      nom: args.nom,
      mare: {
        connect: { id: args.mareId }
      }
    })
  },
  addPoissons: (root, args, context) => {
    const poissonsCreated = []
    for (let i=1; i<= args.quantite; i++ ) {
      poissonsCreated.push(context.prisma.createPoisson({
        mare: {
          connect: { id: args.mareId }
        }
      }))
    }
    return poissonsCreated;
  },
  moveCanard: (root, args, context) => {
    return context.prisma.updateCanard({
      data: {
        mare: {
          connect: { id: args.destinationMareId }
        }
      },
      where: {
        id: args.canardId
      }
    })
  }
}
