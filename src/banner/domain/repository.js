const Banner = require('./model');

const mostrarTodos = async () => {
  return await Banner.find().exec();
};

const mostrarPorId = async (id) => {
  return await Banner.findById(id).exec();
};

const crear = async (data) => {
  const banner = new Banner(data);
  return await banner.save();
};

const actualizar = async (id, updates) => {
  return await Banner.findByIdAndUpdate(id, updates, { new: true }).exec();
};

const eliminar = async (id) => {
  const result = await Banner.findByIdAndDelete(id).exec();
  return result !== null;
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
