'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/portafolio')
        .then(()=>{
            console.log("Se hizo la conexion a mongoDB..");

            // Creacion del servidor
            app.listen(port, () => {
                console.log("Servidor cargado");
            });
        }) 
        .catch(err => console.log(err));
