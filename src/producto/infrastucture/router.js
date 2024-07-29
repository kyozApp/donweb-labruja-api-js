const express = require('express');
const productoRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('../../config/multer');
const auth = require('../../config/auth');


productoRouter.get('/', auth, controller.mostrarTodos);
productoRouter.get('/:id', auth, controller.mostrarPorId);
productoRouter.post('/', auth, guardarImagenes.array('imagenes'), controller.crear);
productoRouter.put('/:id', auth, guardarImagenes.array('imagenes'), controller.actualizar);
productoRouter.delete('/:id', auth, controller.eliminar);

module.exports = productoRouter;
