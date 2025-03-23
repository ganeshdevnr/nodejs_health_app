var express = require("express");
var router = express.Router();

const db = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  db.query("INSERT INTO client_logs (ip_address) VALUES ($1)", [ip]);
  res.render("index", { title: `${process.env.ENVIRONMENT}` });
});

module.exports = router;
