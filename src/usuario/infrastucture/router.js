const express = require('express');
const usuarioRouter = express.Router();
const controller = require('./controller');
const auth = require('../../config/auth');

usuarioRouter.get('/', auth, controller.mostrarTodos);
usuarioRouter.get('/:id', auth, controller.mostrarPorId);
usuarioRouter.post('/', controller.crear);
usuarioRouter.put('/:id', auth, controller.actualizar);
usuarioRouter.delete('/:id', auth, controller.eliminar);
usuarioRouter.post('/login', controller.login);

module.exports = usuarioRouter;
