# nc-graphql-2019

Repository for TPs of the NightClazz on GraphQL at Bordeaux (04/02/19)

![](app.png)

## Step 2 - Query and resolvers

In this step, you'll need to add some resolvers and queries to play with the context.
You have 3 entities : Poisson, Canard, Mare. For each of them you'll have to add two queries

- one for retrieving one of them using its given ID
- one for retrieving all of them

An example is present in the `query.js` file.
The name of the arguments must match between your schema and your query.js file.

For your query to work when you ask nested data, you'll also have to write some resolvers for each relation of a given entity. For example if I want to retrieve all the fishs in an area, I have to write a resolver for this in the `mare.js` file maping field `poissons` (according to my SDL).

The `canard.js` file contains a working example.

```javascript
module.exports = {
  poissons: (root, args, context) => {
    return context.prisma.mare.findOne({ where: { id: root.id } }).poissons();
  },
};
```
