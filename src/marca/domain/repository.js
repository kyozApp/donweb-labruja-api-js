const Marca = require('./model');

const mostrarTodos = async () => {
  return await Marca.find().exec();
};

const mostrarPorId = async (id) => {
  return await Marca.findById(id).exec();
};

const crear = async (data) => {
  const marca = new Marca(data);
  return await marca.save();
};

const actualizar = async (id, updates) => {
  return await Marca.findByIdAndUpdate(id, updates, { new: true }).exec();
};

const eliminar = async (id) => {
  const result = await Marca.findByIdAndDelete(id).exec();
  return result !== null;
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
