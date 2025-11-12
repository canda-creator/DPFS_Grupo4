const db = require('../database/models/index.js');

module.exports = {
  index: function (req, res, next) {
    res.render("index", { title: "Express" });
  },
    testDB: async function (req, res, next) {
      const products = await db.Product.findAll()
      res.json(products)
    }
};
