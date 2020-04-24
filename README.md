# nc-graphql-2019

Repository for TPs of the NightClazz on GraphQL at Bordeaux (04/02/19)

![](app.png)

## Step 1 - The SDL

In this step, you'll need to write your schema for the application.
The application is about some ducks and fishes. You have plains that contain ponds. Each pond contain ducks and fishes.

You can have different types in your SDL:

- String
- Boolean
- ID
- other type define in your SDL

To mark a field as required, suffix it with a bang!
To mark a field as an array, use [ ] around the type.

```graphql
type Link {
  id: ID!
  url: String!
  author: Author!
}

type Author {
  id: ID!
  name: String!
  links: [Link!]
}
```
