const express = require('express');
const bannerRouter = express.Router();
const controller = require('./controller');
const { guardarImagenes } = require('./multer');
const auth = require('./auth');
const middleware = require('./middleware');
const { validateCreateBanner, validateUpdateBanner } = require('./validation');

bannerRouter.get('/', controller.mostrarTodos);
bannerRouter.get('/:id', controller.mostrarPorId);
bannerRouter.post('/', auth, guardarImagenes.array('imagenes'), middleware(['empleado', 'jefe']), validateCreateBanner, controller.crear);
bannerRouter.put('/:id', auth, guardarImagenes.array('imagenes'), middleware(['empleado', 'jefe']), validateUpdateBanner, controller.actualizar);
bannerRouter.delete('/:id', auth, middleware(['jefe']), controller.eliminar);

module.exports = bannerRouter;
