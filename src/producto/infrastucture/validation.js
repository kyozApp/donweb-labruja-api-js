const { body, validationResult } = require('express-validator');

const validateCreateProduct = [
    body('nombre').notEmpty().withMessage('Nombre es obligatorio'),
    body('categoria').optional().isString().withMessage('Categoría debe ser una cadena'),
    body('subcategoria').optional().isString().withMessage('Subcategoría debe ser una cadena'),
    body('stockGeneral').optional().isInt({ min: 0 }).withMessage('Stock General debe ser un número entero positivo'),
    body('stockLima').optional().isInt({ min: 0 }).withMessage('Stock Lima debe ser un número entero positivo'),
    body('stockArequipa').optional().isInt({ min: 0 }).withMessage('Stock Arequipa debe ser un número entero positivo'),
    body('precio').optional().isFloat({ min: 0 }).withMessage('Precio debe ser un número positivo'),
    body('estado').optional().isString().withMessage('Estado debe ser una cadena'),
    body('marca').optional().isString().withMessage('Marca debe ser una cadena'),
    body('url').optional().isURL().withMessage('URL debe ser válida'),
    body('descripcion').optional().isString().withMessage('Descripción debe ser una cadena'),
    body('referencia').optional().isString().withMessage('Referencia debe ser una cadena'),
    body('imagenes').optional().isArray().withMessage('Imágenes debe ser un array de cadenas'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUpdateProduct = [
    body('nombre').optional().notEmpty().withMessage('Nombre no puede estar vacío'),
    body('categoria').optional().isString().withMessage('Categoría debe ser una cadena'),
    body('subcategoria').optional().isString().withMessage('Subcategoría debe ser una cadena'),
    body('stockGeneral').optional().isInt({ min: 0 }).withMessage('Stock General debe ser un número entero positivo'),
    body('stockLima').optional().isInt({ min: 0 }).withMessage('Stock Lima debe ser un número entero positivo'),
    body('stockArequipa').optional().isInt({ min: 0 }).withMessage('Stock Arequipa debe ser un número entero positivo'),
    body('precio').optional().isFloat({ min: 0 }).withMessage('Precio debe ser un número positivo'),
    body('estado').optional().isString().withMessage('Estado debe ser una cadena'),
    body('marca').optional().isString().withMessage('Marca debe ser una cadena'),
    body('url').optional().isURL().withMessage('URL debe ser válida'),
    body('descripcion').optional().isString().withMessage('Descripción debe ser una cadena'),
    body('referencia').optional().isString().withMessage('Referencia debe ser una cadena'),
    body('imagenes').optional().isArray().withMessage('Imágenes debe ser un array de cadenas'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateCreateProduct, validateUpdateProduct };
