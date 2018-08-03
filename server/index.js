require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const port = process.env.PORT || 3001;
// const massive = require("massive");
const session = require("express-session");
// const { importSchema } = require("graphql-import");
// const path = require("path");
// const typeDefs = importSchema(path.join(__dirname + "/schema.graphql"));
const typeDefs = `
type Query {
  message: String
  people: [Person]!
  filteredPeople(prop: String, val: String): [Person]!
}
type Person {
  first_name: String
  last_name: String
  email: String
  gender: String
  city: String
  country: String
}
type Mutation {
  addPerson(first_name: String
    last_name: String
    email: String
    gender: String
    city: String
    country: String): [Person]!
}
`;
const resolvers = {
  Query: {
    message() {
      return "Hello World!";
    },
    people() {
      return people;
    },
    filteredPeople: (parent, { prop, val }, { session }) => {
      console.log("{ prop, val }: ", { prop, val });
      return people.filter(c => c[prop] === val);
    }
  },
  Mutation: {
    addPerson: async (_, args) => {
      console.log("args: ", args);
      return [];
      // console.log("{ first_name, last_name, email, gender, city, country }: ", {
      //   first_name,
      //   last_name,
      //   email,
      //   gender,
      //   city,
      //   country
      // });
      // let people = await app.get("db").query(`
      // insert into people (first_name, last_name, email, gender, city, country) values (
      //   ${first_name},
      //   ${last_name},
      //   ${email},
      //   ${gender},
      //   ${city},
      //   ${country}
      // );
      // select * from people;
      // `);
      // return people;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => request
});
const app = server.express;
const options = {
  port,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  cors: {
    credentials: true,
    origin: ["http://localhost:3000"]
  }
};
// massive(process.env.CONNECTION_STRING).then(db => {
//   app.set("db", db);
// });
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
