module.exports = {
  Query: {
    products(_, args, { app }) {
      let hasQuery = Object.values(args).some(c => c);
      let queryObj = hasQuery
        ? ({ id, img_url, gender, category, title, desc, price, sale } = args)
        : {};
      return app
        .get("db")
        .products.find(queryObj)
        .then(products => {
          return products;
        })
        .catch(() => []);
    }
  }
};
