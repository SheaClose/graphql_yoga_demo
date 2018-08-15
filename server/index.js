require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const massive = require("massive");
const session = require("express-session");
const { importSchema } = require("graphql-import");
const path = require("path");
const typeDefs = importSchema(path.join(__dirname + "/schema.graphql"));
const resolvers = require("./resolvers");
const { graphqlOptions, sessionOptions } = require("./config");
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => request
});

const app = server.express;

(async () => {
  let db = await massive(process.env.CONNECTION_STRING);
  app.set("db", db);
  app.use(session(sessionOptions));
  server.start(graphqlOptions, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
})();
