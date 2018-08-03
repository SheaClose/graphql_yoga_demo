module.exports = {
  Query: {
    message() {
      return "Hello World!";
    },
    people() {
      return people;
    },
    filteredPeople(_, { prop, val }) {
      return people.filter(c => c[prop] === val);
    }
  }
};
