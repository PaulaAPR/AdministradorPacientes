const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function() {

    /* Agrega nuevos pacientes via POST */
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    /* Obtiene todos los registros de pacientes en la bd */
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    /* Obtiene un paciente en específico */
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    /* Actualizar un registro con un ID específico */
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    /* Elimina a un paciente por su ID */
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}