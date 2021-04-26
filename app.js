'use strict'
var express = require('express');

var app = express(); //crear aplicación express

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

//cagar rutas para

var pacientesRutas = require('./rutas/pacientesruta');



// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas base

app.use('/api',pacientesRutas);

module.exports = app;