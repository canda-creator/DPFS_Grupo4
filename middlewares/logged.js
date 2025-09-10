// middlewares/requireAuth.js
module.exports = (req, res, next) => {
  // si no hay usuario en sesión, mandá al login
  if (!req.session || !req.session.userLogged) {
    return res.redirect('/users/login');
  }
  next();
};
