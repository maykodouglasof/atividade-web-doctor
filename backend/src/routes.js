const { Router } = require('express');

const PacienteController = require('./controllers/PacienteController');

const routes = Router();

routes.get('/pacientes', PacienteController.index);
routes.post('/pacientes', PacienteController.store);

module.exports = routes;
