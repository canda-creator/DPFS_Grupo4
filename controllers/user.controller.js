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
    const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    const userFound = users.find(user=>user.email == req.body.email);
    if(userFound){
      const isPassOk = bycrypt.compareSync(req.body.password, userFound.password)
      if(isPassOk){
        req.session.userLogged = userFound  
        if(req.body.rememberme == "on"){
          res.cookie("email", userFound.email, {maxAge: 60*1000*60})
        }  
        res.redirect("/users/profile")  
      }else{
        res.send("La contraseña es incorrecta")
      }
    }
  },
  register: function (req, res, next) {
    res.render("users/register", { title: "Register" });
  },
  profile:function (req, res, next){
    console.log(req.session);
    res.render("users/profile.ejs", {title:"Express"});
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
