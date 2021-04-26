"use strict";

var mongoose = require("mongoose");
var esquema = mongoose.Schema;

var pacienteEsquema = esquema(
  {
      nombre: String,
      sexo: String,
      curp: String,
      fecha: String,
      dosis: String,
      marca: String
  }
);

module.exports = mongoose.model("Paciente", pacienteEsquema);
