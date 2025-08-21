const fs = require("fs");
const path = require("path");

const productsFile = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFile, "utf-8"));

module.exports = {
  catalogo: (req, res) => {
    res.render("products/catalogo", { title: "Catálogo", products });
  },
  createForm: (req, res) => {
    res.render("products/create", { title: "Crear producto" });
  },
  create: (req, res) => {
    const newProduct = {
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
  detail: (req, res) => {
    const product = products.find((p) => p.id == req.params.id);
    res.render("products/detail", { title: "Detalle", product });
  },
editForm: (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).send("Producto no encontrado");
  res.render("products/edit", { title: "Editar producto", product });
},

  edit: (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...req.body, id };
      fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    }
    res.redirect("/catalogo");
  },
  delete: (req, res) => {
    products = products.filter((p) => p.id != req.params.id);
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    res.redirect("/catalogo");
  }
};
