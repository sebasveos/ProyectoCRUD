'use strict'

var express = require('express');  //Acceder a la carpeta de express
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./routes/project')

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());                  //Cualquier objeto que llegue para convertirlo en JSON

// CORS Cabeceras

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
app.use('/api', project_routes);


/*
app.get('/', (req, res) => {
    res.status(200).send(
        "Hola mundito"
    );
});


app.get('/test/:id', (req, res) => {
    console.log(req.body.nombre);  //Porque es el body del postman
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message : "Hola mundo desde mi API de nodeJS"
    });
});
*/
// Exportar
module.exports = app;

