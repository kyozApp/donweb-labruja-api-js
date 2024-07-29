const mongoose = require('mongoose');

const Producto = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    subcategoria: { type: String, required: true },
    stockGeneral: { type: Number, required: true },
    stockLima: { type: Number, required: true },
    stockArequipa: { type: Number, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, required: true },
    marca: { type: String, required: true },
    url: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagenes: [{ type: String, required: true }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Producto', Producto);
