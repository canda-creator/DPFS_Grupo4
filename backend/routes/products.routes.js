const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const { uploadProd } = require("../middlewares/multer");
const admin = require("../middlewares/auth/admin");

router.get("/", productsController.catalogo);

router.get("/create", admin, productsController.createForm);

router.post("/create", uploadProd.single("image"), productsController.create);

router.get("/detail/:id", productsController.detail);

router.get("/edit/:id", productsController.editForm);

router.post("/edit/:id", uploadProd.single("image"), productsController.edit);

router.post("/delete/:id", productsController.delete);

module.exports = router;
