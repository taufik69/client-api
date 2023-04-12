const express = require("express");
const _ = express.Router();
const apiroutes = require("./Api");

/* ---------------------------------- //todo Routes middleware  ---------------------------------- */

const baseUrl = process.env.BASE_URL;
_.use(baseUrl, apiroutes);

_.use(baseUrl, (req, res) => {
  res.status(404).json({
    error: `Api not found try again !`,
  });
});

/* ---------------------------------- //todo Routes middleware  ---------------------------------- */

module.exports = _;
