const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String!
    author: String
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book!
  }

  input CreateBookInput {
    title: String!
    author: String!
  }

  type Mutation {
    #   createBook(book: Book!) : Book!
    createBook(book: CreateBookInput!): Book!
  }
`;

const books = [
  {
    id: 1,
    title: "Book1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book2",
    author: "Author 2",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find((book) => book.id == parseInt(args.id)),
  },
  Mutation: {
    createBook: (parent, args) => {
      const book = args.book;
      console.log(book);
      return book;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(` Qraph QL server is running ${url}`);
});
