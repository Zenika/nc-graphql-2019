"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Plaine",
    embedded: false
  },
  {
    name: "Mare",
    embedded: false
  },
  {
    name: "Canard",
    embedded: false
  },
  {
    name: "Poisson",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/alexis-brones-0fc289/nc-graphql-2019/dev`
});
exports.prisma = new exports.Prisma();
