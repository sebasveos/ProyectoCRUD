'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    lastName: String,
    age: Number,
});

module.exports = mongoose.model('Project', ProjectSchema); // Modelo de inicio
// Logica de negocio (Base de datos)




