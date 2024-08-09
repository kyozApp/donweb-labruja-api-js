const express = require('express');
const productoRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('./multer');
const auth = require('./auth');
const middleware = require('./middleware');
const { validateCreateProduct, validateUpdateProduct } = require('./validation');

productoRouter.get('/', controller.mostrarTodos);
productoRouter.get('/:id', controller.mostrarPorId);
productoRouter.post('/', auth, guardarImagenes.array('imagenes'), middleware(['empleado', 'jefe']), validateCreateProduct, controller.crear);
productoRouter.put('/:id', auth, guardarImagenes.array('imagenes'), middleware(['empleado', 'jefe']), validateUpdateProduct, controller.actualizar);
productoRouter.delete('/:id', auth, middleware(['jefe']), controller.eliminar);

module.exports = productoRouter;
