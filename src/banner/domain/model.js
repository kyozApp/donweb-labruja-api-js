const mongoose = require('mongoose');

const Banner = new mongoose.Schema(
  {
    seccion: { type: String, required: true },
    imagenes: [{ type: String, required: true }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Banner', Banner);
