const mongoose = require('mongoose');

const Banner = new mongoose.Schema(
  {
    seccion: { type: String, required: true },
    url: { type: String, nullable: true },
    atributo: { type: String, nullable: true },
    imagenes: [{ type: String, nullable: true }],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Banner', Banner);
