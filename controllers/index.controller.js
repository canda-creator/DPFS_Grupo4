const fs = require("fs");
const path = require("path");

// Ruta al JSON de productos
const productsFile = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFile, "utf-8"));

module.exports = {
  index: function (req, res, next) {
    res.render("index", { title: "Express" });
  },
  products: function (req, res, next) {
    res.render("products/catalogo", { title: "catalogo", products });
  },
  createForm: function (req, res, next) {
    res.render("products/create", { title: "Crear producto" });
  },
  create: function (req, res, next) {
    let newProduct = {
      id: Date.now(),
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      colors: req.body.colors,
      price: req.body.price,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    res.redirect("/catalogo");
  },
  detail: function (req, res, next) {
    const product = products.find((p) => p.id == req.params.id);
    res.render("products/detail", { title: "detail", product });
  },
  edit: function (req, res, next) {
    res.render("products/edit", { title: "edit" });
  },
};
