//Acciones referente a las bd de projects

'use strict'

var Project = require('../models/proyect');
var fs = require('fs');
var path = require('path');
let isImageUploading = false;
var controller = {

  saveProject: function (req, res) {  //Guardar algun datos desde el postman por body
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.lastName = params.lastName;
    project.age = params.age;
    //project.image = null;

    project.save().then((projectStored) => {
      return res.status(200).send({ message: "Objeto guardado", project: projectStored });
    })
      .catch((error) => {
        if (!projectStored) return res.status(404).send({ message: 'No se ha podido guardar' });

        if (error) return res.status(500).send({ error: 'Error al guardar en la BD' });

      });
  },

  getProject: function (req, res) {  //Para traer un dato de la base de datos
    var projectId = req.params.id;

    if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe' });


    Project.findById(projectId).then((projecto) => {

      if (!projecto) return res.status(404).send({ message: 'El proyecto no existe' });

      return res.status(200).send({ message: "Objeto obtenido", project: projecto });
    })
      .catch((error) => {

        if (error) return res.status(500).send({ message: 'Error al devolver los datos' });

      });
  },

  getProjects: function (req, res) { //Para consultar todos los objetos de la base de datos(Listar)

    Project.find({}).sort('-age').then((projects) => {  //Sort para ordenar 

      if (!projects) return res.status(404).send({ message: 'No hay objetos que mostrar' });

      return res.status(200).send({ message: "Objeto obtenido", projects });
    })
      .catch((error) => {

        if (error) return res.status(500).send({ message: 'Error al devolver los datos' });

      });
  },

  updateProject: function (req, res) {  //Para actualizar 
    var projectId = req.params.id; //Capturar el parametro que nos llega por la url
    var update = req.body; //Objeto completo desde el body

    Project.findByIdAndUpdate(projectId, update).then((projectUpdate) => {
      if (!projectUpdate) return res.status(404).send({ message: 'No hay objetos para actualizar' });

      return res.status(200).send({ message: "Objeto actualizado", project: projectUpdate });
    })
      .catch((error) => {
        if (error) return res.status(500).send({ message: 'Error al actualizar los datos' });
      });

  },

  deleteProject: function (req, res) {
    var projectId = req.params.id;

    Project.findByIdAndDelete(projectId).then((projectDelete) => {
      if (!projectDelete) return res.status(404).send({ message: 'No hay objetos para eliminar' });

      return res.status(200).send({ message: "Objeto eliminado", project: projectDelete });
    })
      .catch((error) => {
        if (error) return res.status(500).send({ message: 'Error al eliminar los datos' });
      });
  },

  // Agrega una variable booleana como semáforo para controlar la carga de imágenes


  // Función para cargar una imagen
  /*uploadImage: function (req, res) {
    if (isImageUploading) {
      return res.status(400).send({ message: 'Otra imagen está siendo subida. Intenta de nuevo más tarde.' });
    }

    isImageUploading = true; // Establecer el semáforo a true para bloquear otras solicitudes de carga

    var projectId = req.params.id;
    var filename = 'Imagen no subida..';

    if (req.file) {
      var filePath = req.file.path;
      var fileSplit = filePath.split('\\');
      var fileName = fileSplit[1];
      var extSplit = fileName.split('\.');
      var fileExt = extSplit[1];

      if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
        console.log('Aqui');
        Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true })
          .then((projectUpdated) => {
            if (!projectUpdated) {
              return res.status(404).send({ message: 'El proyecto no existe' });
            }

            // Finalizar la carga de imagen y liberar el semáforo
            isImageUploading = false;

            return res.status(200).send({ project: projectUpdated });
          })
          .catch((err) => {
            // Finalizar la carga de imagen y liberar el semáforo en caso de error
            isImageUploading = false;

            return res.status(500).send({ message: 'La imagen no se ha subido' });
          });
      } else {
        // Eliminar el archivo ya que la extensión no es válida
        fs.unlink(filePath, (err) => {
          // Finalizar la carga de imagen y liberar el semáforo
          isImageUploading = false;

          return res.status(200).send({ message: 'Extensión del archivo no válida' });
        });
      }
    } else {
      // Finalizar la carga de imagen y liberar el semáforo
      isImageUploading = false;

      return res.status(200).send({ message: fileName });
    }
  },

  getImageFile: function (req, res) {
    var file = req.params.image;
    var path_file = './uploads/' + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: "No existe la imagen"
        });
      }
    })
  }
*/

};
module.exports = controller;
