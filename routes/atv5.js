const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end(
    "Informe a operacao e os valores para x e y na url! Exemplo: '../atv5/*OPERACAO*/?x=*VALOR 1*&y=*VALOR 2*'"
  );
  return;
});

router.get("/:operacao", (req, res) => {
  let { x, y } = req.query;

  if (!x || !y) {
    res.end(
      "Informe valores para x e y! Exemplo: '../atv5/*OPERACAO*/?x=*VALOR 1*&y=*VALOR 2*'"
    );
    return;
  }

  x = parseInt(x);
  y = parseInt(y);

  let operacao = req.params.operacao;
  let result = 0;
  let sinal = "";
  switch (operacao) {
    case "soma":
      result = x + y;
      sinal = "+";
      break;
    case "subtracao":
      result = x - y;
      sinal = "-";
      break;
    case "multiplicacao":
      result = x * y;
      sinal = "*";
      break;
    case "divisao":
      result = x / y;
      sinal = "/";
      break;
    default:
      res.end("Operação inválida!");
      return;
  }

  res.end(x + " " + sinal + " " + y + " = " + result);
});

module.exports = router;
