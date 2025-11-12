const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");

module.exports = {
  catalogo: async (req, res) => {
    const products = await db.Product.findAll();
    res.render("products/catalogo", { title: "Catálogo", products });
  },

  createForm: async (req, res) => {
    const colors = await db.Color.findAll(); 
    const categories = await db.Category.findAll();
    res.render("products/create", { title: "Crear producto", colors, categories });
  },

  create: async (req, res) => {
    const newProduct = {
      id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      image: req.file ? req.file.filename : "default.jpg",
      category_id: req.body.category,
      color_id: req.body.colors,
      price: req.body.price,
    };

    await db.Product.create(newProduct);
    res.redirect("/products");
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.render("products/detail", { title: "Detalle", product });
  },

  editForm: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    const colors = await db.Color.findAll(); 
    const categories = await db.Category.findAll();

    if (!product) return res.status(404).send("Producto no encontrado");
    res.render("products/edit", { title: "Editar producto", product, colors, categories });
  },

  edit: async (req, res) => {
    const updateData = {
      id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category,
      color_id: req.body.colors,
      price: req.body.price,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await db.Product.update(updateData, {
      where: { id: req.params.id },
    });

    res.redirect("/products");
  },

  delete: async (req, res) => {
    await db.Product.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/products");
  },
};
