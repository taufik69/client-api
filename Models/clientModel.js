const mongoose = require("mongoose");
const { Schema } = mongoose;

/* -------------------------------------------------------------------------- */
/*                     // todo model for clientmode                           */
/* -------------------------------------------------------------------------- */

const clientSchema = new Schema({
  subTitle: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  slideToShow: {
    type: Number,
  },
  sliderItem: [
    {
      _id: 0,
      images: {
        type: String,
        trim: true,
      },

      symbol: {
        type: String,
        trim: true,
      },
      heading: {
        type: String,
        trim: true,
      },
      paragraph: {
        type: String,
        trim: true,
      },
      rating: {
        type: Number,
      },
      name: {
        type: String,
        trim: true,
      },
      designation: {
        type: String,
        trim: true,
      },
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("client", clientSchema);

/* -------------------------------------------------------------------------- */
/*                     // todo model for clientmode                           */
/* -------------------------------------------------------------------------- */
