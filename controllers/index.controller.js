module.exports = {
  index: function (req, res, next) {
    res.render("index", { title: "Express" });
  },
  catalogo: function (req, res, next) {
    res.render("products/catalogo", { title: "catalogo" });
  },
  detail: function (req, res, next) {
    res.render("products/detail", { title: "detail" });
  },
  login: function (req, res, next) {
    res.render("users/login", { title: "Login" });
  },
    register: function (req, res, next) {
        res.render("users/register", { title: "Register" });
    }
};
