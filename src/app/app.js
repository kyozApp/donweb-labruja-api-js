const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usuarioRouter = require('../usuario/infrastucture/router');
const productoRouter = require('../producto/infrastucture/router');
const bannerRouter = require('../banner/infrastucture/router');
const marcaRouter = require('../marca/infrastucture/router');

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
// app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/usuario', usuarioRouter);
app.use('/api/v1/producto', productoRouter);
app.use('/api/v1/banner', bannerRouter);
app.use('/api/v1/marca', marcaRouter);

module.exports = app;