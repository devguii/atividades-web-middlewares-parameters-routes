const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Acesso(s): " + req.acesso);
});

module.exports = router;
