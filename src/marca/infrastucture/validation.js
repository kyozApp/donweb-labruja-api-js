const { body, validationResult } = require('express-validator');

const validateCreateMarca = [
    body('nombre').notEmpty().withMessage('Nombre es obligatorio'),
    body('estado').optional().isString().withMessage('Estado debe ser una cadena'),
    body('imagen').optional().isString().withMessage('Imagen debe ser una cadena'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUpdateMarca = [
    body('nombre').optional().notEmpty().withMessage('Nombre no puede estar vacío'),
    body('estado').optional().isString().withMessage('Estado debe ser una cadena'),
    body('imagen').optional().isString().withMessage('Imagen debe ser una cadena'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateCreateMarca, validateUpdateMarca };
