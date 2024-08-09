const express = require('express');
const marcaRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('./multer');
const auth = require('./auth');
const middleware = require('./middleware');
const { validateCreateMarca, validateUpdateMarca } = require('./validation');

marcaRouter.get('/', controller.mostrarTodos);
marcaRouter.get('/:id', controller.mostrarPorId);
marcaRouter.post('/', auth, guardarImagenes.single('imagen'), middleware(['empleado', 'jefe']), validateCreateMarca, controller.crear);
marcaRouter.put('/:id', auth, guardarImagenes.single('imagen'), middleware(['empleado', 'jefe']), validateUpdateMarca, controller.actualizar);
marcaRouter.delete('/:id', auth, middleware(['jefe']), controller.eliminar);

module.exports = marcaRouter;
