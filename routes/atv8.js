const express = require("express");
const router = express.Router();

function validaCodigo(req, res, next) {
  let id = req.params.id;
  if (!id) {
    res.end("ID nao informado");
    return;
  }
  id = parseInt(id);
  if (id > 0 && id % 2 == 0) {
    req.id = id;
    next();
  } else {
    res.end("ID invalido!");
  }
}

router.get("/:id", validaCodigo, (req, res) => {
  res.end("Codigo: " + req.id);
});

router.post("/", (req, res) => {});

module.exports = router;
