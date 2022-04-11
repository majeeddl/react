const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Book1",
    author: "Author 1",
  },
  {
    title: "Book2",
    author: "Author 2",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(` Qraph QL server is running ${url}`);
});
