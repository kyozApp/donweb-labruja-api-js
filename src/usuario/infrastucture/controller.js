const service = require('../application/service');

const mostrarTodos = async (req, res) => {
  try {
    const result = await service.mostrarTodos();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mostrarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await service.mostrarPorId(id);
    if (!result) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crear = async (req, res) => {
  const nuevo = req.body;
  try {
    const result = await service.crear(nuevo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizar = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const result = await service.actualizar(id, updates);
    if (!result) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminar = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await service.eliminar(id);
    if (!result) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json({ message: 'Usuario elimnado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { correo, clave } = req.body;
  try {
    const result = await service.login({ correo, clave });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar, login };
