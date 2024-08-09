const express = require('express');
const usuarioRouter = express.Router();
const controller = require('./controller');
const auth = require('./auth');
const middleware = require('./middleware');
const { validateCreateUser, validateUpdateUser } = require('./validation');

usuarioRouter.get('/', auth, middleware(['empleado', 'jefe']), controller.mostrarTodos);
usuarioRouter.get('/:id', auth, middleware(['empleado', 'jefe']), controller.mostrarPorId);
usuarioRouter.post('/', middleware(['cliente', 'empleado', 'jefe']), validateCreateUser, controller.crear);
usuarioRouter.put('/:id', auth, middleware(['cliente', 'empleado', 'jefe']), validateUpdateUser, controller.actualizar);
usuarioRouter.delete('/:id', auth, middleware(['jefe']), controller.eliminar);
usuarioRouter.post('/login', middleware(['cliente', 'empleado', 'jefe']), controller.login);

module.exports = usuarioRouter;
