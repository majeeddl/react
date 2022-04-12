const express = require("express");
const cors = require("cors");
var { graphqlHTTP } = require("express-graphql");

const { schema } = require("./graphql/schema");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(" Running a graphql API server at http://localhost:4001/graphql");
});
