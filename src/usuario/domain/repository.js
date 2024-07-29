const Usuario = require('./model');
const bcrypt = require('bcryptjs');

const mostrarTodos = async () => {
  return await Usuario.find().exec();
};

const mostrarPorId = async (id) => {
  return await Usuario.findById(id).exec();
};

const crear = async (data) => {
  const usuario = new Usuario(data);
  return await usuario.save();
};

const actualizar = async (id, updates) => {
  return await Usuario.findByIdAndUpdate(id, updates, { new: true }).exec();
};

const eliminar = async (id) => {
  const result = await Usuario.findByIdAndDelete(id).exec();
  return result !== null;
};

const login = async (correo, clave) => {
  const usuario = await Usuario.findOne({ correo }).exec();
  if (usuario && await bcrypt.compare(clave, usuario.clave)) {
    return usuario;
  } else {
    return null;
  }
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar, login };
