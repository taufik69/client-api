require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { DBconnect } = require("./Configuration/DBconnection.js");
const allroutes = require("./Routes");
/* -------------------------------------------------------------------------- */
/*                               All middleware                               */
/* -------------------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
DBconnect();
app.use(allroutes);

/* -------------------------------------------------------------------------- */
/*                               All middleware                               */
/* -------------------------------------------------------------------------- */

/* ----------------------------- // todo Run the server ----------------------------- */

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

/* ----------------------------- // todo Run the server ----------------------------- */
