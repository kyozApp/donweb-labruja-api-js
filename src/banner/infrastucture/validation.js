const { body, validationResult } = require('express-validator');

const validateCreateBanner = [
    body('seccion').notEmpty().withMessage('Sección es obligatoria'),
    body('url').optional().isURL().withMessage('URL debe ser válida'),
    body('atributo').optional().isString().withMessage('Atributo debe ser una cadena'),
    body('imagenes').optional().isArray().withMessage('Imágenes deben ser un arreglo de cadenas'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUpdateBanner = [
    body('seccion').optional().notEmpty().withMessage('Sección no puede estar vacía'),
    body('url').optional().isURL().withMessage('URL debe ser válida'),
    body('atributo').optional().isString().withMessage('Atributo debe ser una cadena'),
    body('imagenes').optional().isArray().withMessage('Imágenes deben ser un arreglo de cadenas'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateCreateBanner, validateUpdateBanner };
