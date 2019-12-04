module.exports = {
  nouveauCanard: {
    subscribe: (root, args, context) => {
      return context.prisma.$subscribe
        .canard({
          mutation_in: ["CREATED"],
          node: {
            id: args.mareId
          }
        })
        .node();
    },
    resolve: payload => {
      return payload;
    }
  }
}
