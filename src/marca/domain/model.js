const mongoose = require('mongoose');

const Marca = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    estado: { type: String, nullable: true },
    imagen: { type: String, nullable: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Marca', Marca);
