const db = require("../../database/models");

async function userLogged(req,res,next){
  res.locals.isLogged   = false;
  res.locals.userLogged = null;
  res.locals.isAdmin    = false;
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        res.locals.isAdmin = req.session.userLogged.rol == "admin" ? true : false;
    }

    if(!req.session.userLogged && req.cookies.email){
        try {
            const userFound = await db.User.findOne({ where: { email: req.cookies.email } });
            if(userFound){
                res.locals.isLogged = true;
                req.session.userLogged = userFound;
                res.locals.userLogged = userFound;
                res.locals.isAdmin = userFound.rol == "admin";
            }
        } catch (error) {
            console.error("Error al buscar usuario por email:", error);
        }
    }
    next();
}
module.exports = userLogged