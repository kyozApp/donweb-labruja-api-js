const mongoose = require('mongoose');

const Producto = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String, nullable: true, },
    subcategoria: { type: String, nullable: true, },
    stockGeneral: { type: Number, nullable: true, },
    stockLima: { type: Number, nullable: true, },
    stockArequipa: { type: Number, nullable: true, },
    precio: { type: Number, nullable: true, },
    estado: { type: String, nullable: true, },
    marca: { type: String, nullable: true, },
    url: { type: String, nullable: true, },
    descripcion: { type: String, nullable: true, },
    referencia: { type: String, nullable: true, },
    imagenes: [{ type: String, nullable: true, },]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Producto', Producto);
