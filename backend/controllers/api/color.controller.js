const db = require("../../database/models");

module.exports = {
  colors: async function (req, res, next) {
    res.json(
      await db.Color.findAll()
    );
  },
};
