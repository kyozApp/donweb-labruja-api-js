const roleMiddleware = (roles) => (req, res, next) => {
    const { cargo } = req.user;
    if (roles.includes(cargo)) {
        next();
    } else {
        res.status(403).json({ message: 'Acceso denegado' });
    }
};

module.exports = roleMiddleware;
