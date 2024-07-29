const mongoose = require('mongoose');

const Marca = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Marca', Marca);
