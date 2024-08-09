const { body, validationResult } = require('express-validator');

const validateCreateUser = [
    body('nombre').notEmpty().withMessage('Nombre es obligatorio'),
    body('correo').isEmail().withMessage('Correo debe ser válido'),
    body('clave').isLength({ min: 6 }).withMessage('Clave debe tener al menos 6 caracteres'),
    body('cargo').isIn(['empleado', 'cliente', 'jefe']).withMessage('Cargo debe ser uno de los siguientes: empleado, cliente, jefe'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUpdateUser = [
    body('nombre').optional().notEmpty().withMessage('Nombre no puede estar vacío'),
    body('correo').optional().isEmail().withMessage('Correo debe ser válido'),
    body('clave').optional().isLength({ min: 6 }).withMessage('Clave debe tener al menos 6 caracteres'),
    body('cargo').optional().isIn(['empleado', 'cliente', 'jefe']).withMessage('Cargo debe ser uno de los siguientes: empleado, cliente, jefe'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateCreateUser, validateUpdateUser };
