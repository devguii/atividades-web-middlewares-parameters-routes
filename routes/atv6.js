const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.redirect("/page.html"));

module.exports = router;
