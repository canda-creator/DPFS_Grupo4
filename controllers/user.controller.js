module.exports = {
  login: function (req, res, next) {
    res.render("users/login", { title: "Login" });
  },
  register: function (req, res, next) {
    res.render("users/register", { title: "Register" });
  },
};
