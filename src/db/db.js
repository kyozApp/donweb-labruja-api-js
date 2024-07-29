const mongoose = require('mongoose');
const { URI } = require('../config/variables');

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Conectado a la base de datos');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
