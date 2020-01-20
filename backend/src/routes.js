//Importando apenas o  modulo de roteamento do express
const { Router } = require('express');
const DevController = require('./controllers/Devcontrollers');

const routes = Router();

routes.post('/devs', DevController.store);

module.exports = routes;