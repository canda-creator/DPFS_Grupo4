const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");

module.exports = {
  login: function (req, res, next) {
    res.render("users/login", { title: "Login", error: null });
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("email");
      res.clearCookie("connect.sid");
      return res.redirect("/users/login");
    });
  },

  processLogin: async (req, res) => {
    const userFound = await db.User.findOne({
      where: { email: req.body.email },
    });

    if (!userFound) {
      return res.status(400).render("users/login", {
        title: "Login",
        error: { msg: "Usuario no encontrado" },
      });
    }

    const ok = bcrypt.compareSync(req.body.password, userFound.password);
    if (!ok) {
      return res.status(400).render("users/login", {
        title: "Login",
        error: { msg: "Contraseña incorrecta" },
      });
    }

    req.session.userLogged = userFound;
    if (req.body.rememberme === "on") {
      res.cookie("email", userFound.email, { maxAge: 1000 * 60 * 60 });
    }
    return res.redirect("/users/profile");
  },

  register: function (req, res, next) {
    res.render("users/register", { title: "Register" });
  },

  profile: function (req, res, next) {
    res.render("users/profile.ejs");
  },

  processRegister: async (req, res) => {
    let newUser = {
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      profile: req.file?.filename || "default-profile.png",
      rol: "user",
      password: bcrypt.hashSync(req.body.password, 12),
    };

    await db.User.create(newUser);
    res.redirect("/users/login");
  },
};
