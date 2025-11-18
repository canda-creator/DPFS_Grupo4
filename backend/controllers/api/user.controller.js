const db = require("../../database/models");

module.exports = {
  users: async function (req, res, next) {
    res.json(await db.User.findAll({ attributes: { exclude: ["password"] } }));
  },
};
