const axios = require("axios");
const { GraphQLServer } = require("graphql-yoga");
let people = [];
const typeDefs = `
  type Query {
    name: String,
    people: [Person]
    person(prop: String, val: String) :Person
  }
  type Person {
    name: String
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
  }
`;
const resolvers = {
  Query: {
    name() {
      return "Shea close";
    },
    people() {
      return people;
    },
    person(_, { prop, val }) {
      let person = people.find(c => c[prop] === val);
      return person;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(({ port }) => console.log(`Listening on port ${port}`));

(async () => {
  let nextUrl = "https://swapi.co/api/people";
  while (nextUrl) {
    let {
      data: { next, results }
    } = await axios.get(nextUrl);
    people.push(...results);
    nextUrl = next;
  }
})();
