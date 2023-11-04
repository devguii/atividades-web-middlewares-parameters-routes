const express = require("express");
const router = express.Router();

router.get("/a", (req, res) => {
  res.end("<a href='/atv1/b'>Ir para a rota B</a>");
});

router.get("/b", (req, res) => {
  res.end("<a href='/atv1/a'>Ir para a rota A</a>");
});

module.exports = router;
