const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let keys = Object.keys(req.query);
  let qtd = keys.length;
  if (qtd == 0) {
    res.end("Nenhum valor informado!");
    return;
  }
  let total = 0;
  for (let i = 0; i < qtd; i++) {
    let aux = parseFloat(req.query[keys[i]]);
    if (aux) {
      total += aux;
    }
  }
  let resp =
    "<h1>Resultado</h1>Quantidade de valores: " +
    qtd +
    " <br> Media: " +
    total / qtd;
  res.end(resp);
});

module.exports = router;
