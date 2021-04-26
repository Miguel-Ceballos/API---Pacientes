'use strict'

var express = require('express');
var cors = require('cors');
var ctlPaciente = require('../controladores/ctlPaciente');
var api = express.Router();
api.post('/pacientes',cors(),ctlPaciente.guardaPaciente);
api.put('/pacientes/:id',cors(),ctlPaciente.modificaPaciente);
api.get('/pacientes/:id?',cors(),ctlPaciente.consultaPaciente); //id:? el ID es opcional
api.delete('/pacientes/:id',cors(),ctlPaciente.eliminaPaciente);



module.exports = api;