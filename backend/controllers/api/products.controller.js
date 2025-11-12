const { v4: uuidv4 } = require("uuid");
const db = require("../../database/models");

module.exports = {
  catalogo: async (req, res) => {
    const products = await db.Product.findAll();
    res.json(products);
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
    res.sendStatus(200);
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.json(product);
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

    res.sendStatus(200);
  },

  delete: async (req, res) => {
    await db.Product.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(200);
  },
};
