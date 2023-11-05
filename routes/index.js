var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Atividades Web - Middleware, parâmetros e rotas.",
  });
});

module.exports = router;
