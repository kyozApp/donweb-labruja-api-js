const app = require('./app/app');
const db = require('./app/db');
const { PORT } = require('./app/variables');

db().then(() => {
    app.listen(PORT, () => {
        console.log(`Corriendo en el puerto: ${ PORT }`);
    });
}).catch((err) => {
    console.error('Error con la conexión: ', err.message);
});
