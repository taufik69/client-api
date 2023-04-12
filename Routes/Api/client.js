const express = require("express");
const _ = express.Router();
const clientSchema = require("../../Models/clientModel");
/* -------------------------------------------------------------------------- */
/*                // todo client middleware functionality                      */
/* -------------------------------------------------------------------------- */

_.post("/makeclient", async (req, res) => {
  try {
    const { subTitle, title, slideToShow, sliderItem } = req.body;

    const sendClientData = await clientSchema({
      subTitle,
      title,
      slideToShow,
      sliderItem,
    }).save();
    res.status(200).json(sendClientData);
  } catch (error) {
    res.status(404).json({
      Error: `Occurs form client routes ${error}`,
    });
  }
});

_.get("/getclient", async (req, res) => {
  try {
    const retriveGetClientInfo = await clientSchema.findOne({});
    res.status(200).json(retriveGetClientInfo);
  } catch (err) {
    res.status(404).json({
      Error: `Occurs from client routes ${err}`,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                // todo client middleware functionality                      */
/* -------------------------------------------------------------------------- */

module.exports = _;
