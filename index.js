'use strict'
var mongodb = require('mongoose');

//servidos web
var app = require('./app');
var puerto = 4000;


mongodb.connect('mongodb://localhost:27017/ventas',
(err,res)=>{
    if (err)
        throw err;
    else
        console.log('Coneccion con Mongodb tuvo exito');
        app.listen(puerto,
            ()=>{console.log('El server esta escuchando peticiones en el puerto ' + puerto)})

});