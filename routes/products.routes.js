const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/catalogo", productsController.catalogo);

router.get("/create", productsController.createForm);

router.post("/create", productsController.create);

router.get("/detail/:id", productsController.detail);

router.get("/edit/:id", productsController.editForm);

router.post("/edit/:id", productsController.edit);

router.post("/delete/:id", productsController.delete);

module.exports = router;
