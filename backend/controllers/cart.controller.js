const db = require("../database/models");

module.exports = {
  add: async function (req, res, next) {
    let productID = req.body.productID 
    let userID = req.session.userLogged.id;
    let amount = req.body.amount;

    if (!productID || !userID || !amount) {
      return res.status(400).send("Bad Request");
    }

    await db.Cart.upsert({
      user_id: userID,
      product_id: productID,
      amount: amount,
    });
  },

  delete: function (req, res, next) {
    res.render("users/login", { title: "Login", error: null });
  }

};