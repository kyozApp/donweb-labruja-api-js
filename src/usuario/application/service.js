const repository = require('../domain/repository');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../infrastucture/variables');

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
  return await repository.actualizar(id, updates);
};

const eliminar = async (id) => {
  return await repository.eliminar(id);
};

const login = async ({ correo, clave }) => {
  const usuario = await repository.login(correo, clave);
  if (usuario) {
    const token = jwt.sign({ id: usuario._id, correo: usuario.correo, cargo: usuario.cargo }, JWT_SECRET, { expiresIn: '12h' });
    return { usuario, token };
  } else {
    throw new Error('Usuario no encontrado');
  }
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar, login };
