

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book{
        title: String!
    }

    type Query {
        books : [Book]!
        book (id :ID!) : Book!
    }
`


const resolvers = {

    Query: {
        books: () => [],
        book: (_, args) => {
            return { "title": args.id }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Graph QL server in running ${url}`)
})