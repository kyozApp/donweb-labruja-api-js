const repository = require('../domain/repository');
const fs = require('fs/promises');

const mostrarTodos = async () => {
  return await repository.mostrarTodos();
};

const mostrarPorId = async (id) => {
  return await repository.mostrarPorId(id);
};

const crear = async (data) => {
  return await repository.crear(data);
};

const actualizar = async (id, updates) => {
  const result = await repository.mostrarPorId(id);
  await fs.unlink(result.imagen);
  return await repository.actualizar(id, updates);
};

const eliminar = async (id) => {
  const result = await repository.mostrarPorId(id);
  await fs.unlink(result.imagen);
  return await repository.eliminar(id);
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
