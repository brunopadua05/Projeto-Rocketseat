//importando biblioteca express...
const express = require('express');

const app = express();

app.use(express.json);

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

//setando porta de acesso...
app.listen(3000);

//Anotações:

//Métodos HTTP: GET, POST, PUT, DELETE

//**Tipos de parâmetros**
//Query Params: req.query (Filtros, ordenação, paginação etc...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)