const express = require('express');
const bannerRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('../../config/multer');
const auth = require('../../config/auth');


bannerRouter.get('/', controller.mostrarTodos);
bannerRouter.get('/:id', controller.mostrarPorId);
bannerRouter.post('/', auth, guardarImagenes.array('imagenes'), controller.crear);
bannerRouter.put('/:id', auth, guardarImagenes.array('imagenes'), controller.actualizar);
bannerRouter.delete('/:id', auth, controller.eliminar);

module.exports = bannerRouter;
