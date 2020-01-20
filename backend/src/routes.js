//Importando apenas o  modulo de roteamento do express
const { Router } = require('express');
const DevController = require('./controllers/Devcontrollers');

const routes = Router();

//rota para listar Devs...
routes.get('/devs', DevController.index);

//rota para salvar Devs...
routes.post('/devs', DevController.store);

module.exports = routes;