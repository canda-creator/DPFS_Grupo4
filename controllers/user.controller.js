const bycrypt = require ("bcryptjs")
const{v4: uuid} = require("uuid");
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

module.exports = {
  login: function (req, res, next) {
    res.render("users/login", { title: "Login" });
  },
  processLogin: (req,res)=>{
    console.log(req.body);
  },
  register: function (req, res, next) {
    res.render("users/register", { title: "Register" });
  },
  processRegister: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    let newUser = {
      id: uuid(), 
      name: req.body.name,
      direction: req.body.direction,
      email: req.body.email,
      profile: req.file?.filename || "default-profile.png",
      rol: "user",
      password: bycrypt.hashSync(req.body.password, 12)
    }

    users.push(newUser)
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "))
    res.redirect("/users/login")
  }
};
