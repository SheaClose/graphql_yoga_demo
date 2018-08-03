module.exports = {
  Query: {
    message() {
      return "Hello World!";
    },
    async people(_, args, { app }) {
      let people = await app.get("db").people.find();
      console.log("people: ", people);
      return people;
    },
    filteredPeople: async (parent, { prop, val }, { app }) => {
      let people = await app.get("db").people.find({ [prop]: val });
      // return people.filter(c => c[prop] === val);
      return people;
    }
  }
  // Mutation: {
  // addPerson: async (_, args) => {
  //   console.log("args: ", args);
  //   return [];
  // }
  // }
};
