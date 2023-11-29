'use strict'

var mongoose = require('mongoose');
var app = require('./app');
const PORT = process.env.PORT || 3000;  

const url = "mongodb+srv://sebasveos5:2733432ve@cluster0.uyajhx8.mongodb.net/proyectoCRUD?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
mongoose.connect(url)
        .then(()=>{
            console.log("Se hizo la conexion a mongoDB..");

            // Creacion del servidor
            app.listen(PORT, () => {
                console.log("Servidor cargado");
            });
        }) 
        .catch(err => console.log(err));
