const express = require("express");
const router = express.Router();

var ultima_rota = "b";

router.get("/", (req, res) => {
  if (ultima_rota == "a") {
    ultima_rota = "b";
    res.redirect("/atv1/b");
  } else {
    ultima_rota = "a";
    res.redirect("/atv1/a");
  }
});

module.exports = router;
