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
  create: function (req, res, next) {
    res.render("products/create", { title: "create" });
  }
};
