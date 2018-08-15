module.exports = {
  Query: {
    products(_, args, { app }) {
      return app
        .get("db")
        .products.find(args)
        .then(products => {
          return products;
        })
        .catch(() => []);
    }
  },
  Mutation: {
    async addToCart(_, { id }, { app, sessionID }) {
      let db = app.get("db");
      let cart = await db.cart.find({ user_id: sessionID });
      await db.query(
        `insert into cart (product_id, user_id, quantity) values ($1, $2, $3)`,
        [id, sessionID, 1]
      );
      return db.cart.find({ user_id: sessionID });
    }
  }
};
