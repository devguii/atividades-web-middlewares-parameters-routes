const express = require("express");
const router = express.Router();

let ultima_rota = "a";

router.get("/", (req, res) => {
  if (ultima_rota == "a") {
    ultima_rota = "b";
    res.redirect("/ativ1/b");
  } else {
    ultima_rota = "a";
    res.redirect("/ativ1/a");
  }
});

module.exports = router;
