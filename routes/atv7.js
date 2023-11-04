const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.redirect("/page.html"));

router.post("/", (req, res) => {
  let { usuario, senha } = req.body;

  let token = usuario + usuario;
  if (token == senha) {
    res.end("Acesso autorizado!");
  } else {
    res.end("Acesso negado!");
  }
});

module.exports = router;
