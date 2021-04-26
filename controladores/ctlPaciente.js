'use strict'
var Paciente = require('../modelos/paciente')

function guardaPaciente(req,resp){     
    var paciente = new Paciente();
    var parametros = req.body;    
    paciente.nombre = parametros.nombre;
    paciente.sexo = parametros.sexo;
    paciente.curp = parametros.curp;
    paciente.fecha = parametros.fecha;
    paciente.dosis = parametros.dosis;
    paciente.marca = parametros.marca;
    //console.log(cliente);
    if (paciente.nombre!=null && paciente.sexo!=null && paciente.curp!=null && paciente.fecha!=null && paciente.dosis!=null && paciente.marca!=null){
        paciente.save((err,pacienteRegistrado)=>{
            if (err){
                resp.status(500).send({mensaje:'Error al guardar los datos'})
            }
            else {
                resp.status(200).send({paciente:pacienteRegistrado});
            }            
        });
    }
    else{
        resp.status(500).send({mensaje:'Proporciona todos los campos'});
    }
}
function modificaPaciente(req,resp){  
    
    var pacienteId = req.params.id;    
    var datosNuevos = req.body;
    
    Paciente.findByIdAndUpdate(pacienteId,datosNuevos,(err,pacienteparaActualizar)=>
    {
        if (err){
            resp.status(500).send({mensaje:'Error en la petición'});
        }
        else{
            if (!pacienteparaActualizar){
                resp.status(404).send({mensaje:'El paciente no se pudo modificar'});
            }
            else{
                resp.status(200).send({usuario:pacienteparaActualizar});
            }
        }
    });
}
function eliminaPaciente(req,resp){      
    var pacienteId = req.params.id;    
    Paciente.remove()
    Paciente.remove({_id:pacienteId},(err,info)=>{
        if (err){
            resp.status(500).send({mensaje:'Error en la petición'});
        }
        else{
            if (info.deletedCount>0){resp.status(200).send({mensaje:"Se elimino el registro"});}
            else{resp.status(200).send({mensaje:"No se eliminó el registro"});}
            
        }
    });
}

function consultaPaciente(req,resp){    
    var pacienteId = req.params.id;   
    if (pacienteId){
        Paciente.findOne({_id:pacienteId},(err,paciente)=>{
            if (err){
                resp.status(404).send({mensaje:'Error en la petición o El paciente no existe'});
            }else{
                    resp.status(200).send(paciente);            
            }
        });
    }
    else{        
        Paciente.find((err,pacientes)=>{
            if (err){
                resp.status(404).send({mensaje:'Error en la petición'});
            }else{
                    resp.status(200).send(pacientes);            
            }
        });
    }
}
    
module.exports = {
    guardaPaciente,
    modificaPaciente,
    consultaPaciente,
    eliminaPaciente
}