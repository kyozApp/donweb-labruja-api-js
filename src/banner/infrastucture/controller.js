const service = require('../application/service');
const path = require('path');

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
      res.status(404).json({ message: 'Banner no encontrado' });
      return;
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crear = async (req, res) => {
  const { seccion, url, atributo } = req.body;
  const imagenes = req.files.map(file => path.join('uploads', file.filename));
  const nuevo = {
    seccion,
    url,
    atributo,
    imagenes
  }
  try {
    const result = await service.crear(nuevo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizar = async (req, res) => {
  const id = req.params.id;
  const { seccion, url, atributo } = req.body;
  const imagenes = req.files.map(file => path.join('uploads', file.filename));
  const updates = {
    seccion,
    url,
    atributo,
    imagenes
  }
  try {
    const result = await service.actualizar(id, updates);
    if (!result) {
      res.status(404).json({ message: 'Banner no encontrado' });
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
      res.status(404).json({ message: 'Banner no encontrado' });
      return;
    }
    res.json({ message: 'Banner eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
