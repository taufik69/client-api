const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
/*                               connection code                              */
/* -------------------------------------------------------------------------- */

exports.DBconnect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Connection build sucessfull`);
    })
    .catch((err) => {
      console.log(`Error from Database configuration file: ${err}`);
    });
};

/* -------------------------------------------------------------------------- */
/*                               connection code                              */
/* -------------------------------------------------------------------------- */
