module.exports = {
  createMare: (root, args, context) => {
    return context.prisma.mare.create({
      data: {
        nom: args.name,
        plaine: {
          connect: { id: args.plaineId },
        },
      },
    });
  },
};
