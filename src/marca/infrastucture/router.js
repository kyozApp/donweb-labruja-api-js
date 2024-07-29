const express = require('express');
const marcaRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('../../config/multer');
const auth = require('../../config/auth');


marcaRouter.get('/', auth, controller.mostrarTodos);
marcaRouter.get('/:id', auth, controller.mostrarPorId);
marcaRouter.post('/', auth, guardarImagenes.single('imagen'), controller.crear);
marcaRouter.put('/:id', auth, guardarImagenes.single('imagen'), controller.actualizar);
marcaRouter.delete('/:id', auth, controller.eliminar);

module.exports = marcaRouter;
