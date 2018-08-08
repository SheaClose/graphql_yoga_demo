module.exports = {
  graphqlOptions: {
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
    cors: {
      credentials: true,
      origin: ["http://localhost:3000"]
    }
  },
  sessionOptions: {
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  }
};
