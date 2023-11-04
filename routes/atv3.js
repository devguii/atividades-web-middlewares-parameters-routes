const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let texto = req.query.texto || "";
  if (texto == "") {
    res.end("Informe um texto valido");
    return;
  }

  let aux = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    aux += texto[i];
  }
  res.end("String invertida: " + aux);
});

module.exports = router;
