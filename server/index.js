require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const port = process.env.PORT || 3001;
const massive = require("massive");
// const session = require("express-session");
const { importSchema } = require("graphql-import");
const path = require("path");
const typeDefs = importSchema(path.join(__dirname + "/schema.graphql"));
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => request
});
const app = server.express;
const options = {
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  cors: {
    credentials: true,
    origin: ["http://localhost:3000"]
  }
};
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: true,
//     saveUninitialized: true
//   })
// );

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
