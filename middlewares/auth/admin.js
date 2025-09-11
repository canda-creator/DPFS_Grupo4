function admin(req, res, next) {
  const user = req.session?.userLogged;

  if (!user) {
    console.log("No hay sesión / invitado");
    return res.redirect("/users/login");
  }

  if (user.rol === "admin") {
    console.log("El usuario es admin");
    return next();
  }

  console.log("El usuario no es admin");
  return res.redirect("/users/login");
}

module.exports = admin;
