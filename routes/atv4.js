const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end(
    "Informe um texto apos a url para inverte-lo (.../atv4/*TEXTO AQUI*)"
  );
});

router.get("/:texto", (req, res) => {
  let texto = req.params.texto || "";
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
