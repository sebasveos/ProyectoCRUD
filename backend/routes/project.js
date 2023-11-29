'use strict'

var express = require('express');
var ProjectController = require('../controllers/projects')

var router = express.Router();

/*var crypto = require('crypto')
var multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);

    crypto.pseudoRandomBytes(16, function (err, raw) {

      cb(null, raw.toString('hex') + Date.now() + fileExtension);
    });
  },
});
var mul_upload = multer({dest: './uploads',storage});
*//*var crypto = require('crypto');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);

    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + fileExtension);
    });
  },
});

const mul_upload = multer({dest: './uploads',storage});   

/*var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'})*/



router.post('/saveProject', ProjectController.saveProject); //Para guardar un objeto desde el body de Postman
router.get('/getProject/:id?', ProjectController.getProject);  //Para obtener algo de la Base de datos
router.get('/getProjects', ProjectController.getProjects); //Para mostrar la lista de objetos
router.put('/updateProject/:id?', ProjectController.updateProject); //Para actualizar un objeto segun la ID
router.delete('/deleteProject/:id?', ProjectController.deleteProject); //Para eliminar un proyecto por la ID

//router.get("/detalle-proyecto/:id",projectController.detailProject);

//router.post('/uploadImage/:id', multipartMiddleware, ProjectController.uploadImage);

module.exports = router;