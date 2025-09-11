const bcrypt = require('bcryptjs');
const{v4: uuid} = require("uuid");
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

module.exports = {
  login: function (req, res, next) {
    res.render("users/login", { title: "Login", error:null });
  },
logout: (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('email');       
    res.clearCookie('connect.sid'); 
    return res.redirect('/users/login');
  });
},
  processLogin: (req,res)=>{
    const users = JSON.parse(fs.readFileSync(usersPath, "utf8")|| '[]');
    const userFound = users.find(u=>u.email === req.body.email);
      if (!userFound) {
    return res.status(400).render('users/login', {
      title: 'Login',
      error: { msg: 'Usuario no encontrado' }
    });
  }

  const ok = bcrypt.compareSync(req.body.password, userFound.password);
  if (!ok) {
    return res.status(400).render('users/login', {
      title: 'Login',
      error: { msg: 'Contraseña incorrecta' }
    });
  }

  req.session.userLogged = userFound;
  if (req.body.rememberme === 'on') {
    res.cookie('email', userFound.email, { maxAge: 1000 * 60 * 60 });
  }
  return res.redirect('/users/profile');
},
  register: function (req, res, next) {
    res.render("users/register", { title: "Register" });
  },
  
  profile:function (req, res, next){
    res.render("users/profile.ejs");
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
      password: bcrypt.hashSync(req.body.password, 12) 
    }

    users.push(newUser)
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "))
    res.redirect("/users/login")
  }
};
