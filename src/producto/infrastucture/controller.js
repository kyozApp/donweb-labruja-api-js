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
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crear = async (req, res) => {
  const { nombre, categoria, subcategoria, stockGeneral, stockLima, stockArequipa, precio, estado, marca, url, descripcion, referencia } = req.body;
  const imagenes = req.files.map(file => path.join('uploads', file.filename));
  const nuevo = {
    nombre,
    categoria,
    subcategoria,
    stockGeneral,
    stockLima,
    stockArequipa,
    precio,
    estado,
    marca,
    url,
    descripcion,
    referencia,
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
  const { nombre, categoria, subcategoria, stockGeneral, stockLima, stockArequipa, precio, estado, marca, url, descripcion, referencia } = req.body;
  const imagenes = req.files.map(file => path.join('uploads', file.filename));
  const updates = {
    nombre,
    categoria,
    subcategoria,
    stockGeneral,
    stockLima,
    stockArequipa,
    precio,
    estado,
    marca,
    url,
    descripcion,
    referencia,
    imagenes
  }
  try {
    const result = await service.actualizar(id, updates);
    if (!result) {
      res.status(404).json({ message: 'Producto no encontrado' });
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
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { mostrarTodos, mostrarPorId, crear, actualizar, eliminar };
