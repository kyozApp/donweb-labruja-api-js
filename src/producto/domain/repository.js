const Producto = require('./model');

const mostrarTodos = async () => {
  return await Producto.find().exec();
};

const mostrarPorId = async (id) => {
  return await Producto.findById(id).exec();
};

const crear = async (data) => {
  const producto = new Producto(data);
  return await producto.save();
};

const actualizar = async (id, updates) => {
  return await Producto.findByIdAndUpdate(id, updates, { new: true }).exec();
};

const eliminar = async (id) => {
  const result = await Producto.findByIdAndDelete(id).exec();
  return result !== null;
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
