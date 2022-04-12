const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const { books } = require("../data/data");

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    // author: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "Query",
  description: "This is root query",
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      description: "List of all Books",
      resolve: () => books,
    },
  }),
});

const rootMutation = new GraphQLObjectType({
  name: "mutation",
  description: "Root mutation",
  fields: () => ({
    createBook: {
      type: BookType,
      description: "Create new  book",
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        // author: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parents, args) => {
        console.log(args);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports.schema = schema;
