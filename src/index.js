const { GraphQLServer } = require('graphql-yoga')


let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, args) => links.find((link) => link.id === args.id)
  },
  Link: { // implicit
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  Mutation: {
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (parent, args) => {
      const similarLinkRule = (link) => link.id === args.id
      const previousLink = links.find(similarLinkRule)
      const indexLink = links.findIndex(similarLinkRule)
      const updatedLink = {
       id: previousLink.id,
       description: args.description,
       url: args.url,
     }
     links.splice(1, indexLink, updatedLink)
     return updatedLink
   }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
