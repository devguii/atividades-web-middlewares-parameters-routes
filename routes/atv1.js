const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Olá mundo!");
});

module.exports = router;
