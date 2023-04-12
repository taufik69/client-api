const express = require("express");
const _ = express.Router();
const client = require("./client.js");

_.use("/client", client);

module.exports = _;
