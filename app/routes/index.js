var express = require("express");
var router = express.Router();

const db = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  const rawIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const clientIp = rawIp.split(",")[0].trim();
  db.query("INSERT INTO client_logs (ip_address) VALUES ($1)", [clientIp]);
  res.render("index", { title: `${process.env.ENVIRONMENT}` });
});

module.exports = router;
