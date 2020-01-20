//Importando apenas o  modulo de roteamento do express
const { Router } = require('express');
const DevController = require('./controllers/Devcontrollers');
const SearchController = require('./controllers/SearchController');


const routes = Router();

//rota para listar Devs...
routes.get('/devs', DevController.index);

//rota para salvar Devs...
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;