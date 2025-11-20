const db = require("../../database/models");

module.exports = {
  categories: async function (req, res, next) {
    res.json(
      await db.Category.findAll()
    );
  },
};
