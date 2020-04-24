module.exports = {
  createPlaine: (root, args, context) => {
    return context.prisma.plaine.create({ data: {} });
  },
  createMare: (root, args, context) => {
    return context.prisma.mare.create({
      data: {
        nom: args.nom,
        plaine: {
          connect: { id: args.plaineId },
        },
      },
    });
  },
  addCanard: (root, args, context) => {
    return context.prisma.canard.create({
      data: {
        nom: args.nom,
        mare: {
          connect: { id: args.mareId },
        },
      },
    });
  },
  addPoissons: (root, args, context) => {
    const poissonsCreated = [];
    for (let i = 1; i <= args.quantite; i++) {
      poissonsCreated.push(
        context.prisma.poisson.create({
          data: {
            mare: {
              connect: { id: args.mareId },
            },
          },
        })
      );
    }
    return poissonsCreated;
  },
  moveCanard: (root, args, context) => {
    return context.prisma.canard.update({
      data: {
        mare: {
          connect: { id: args.destinationMareId },
        },
      },
      where: {
        id: args.canardId,
      },
    });
  },
};
