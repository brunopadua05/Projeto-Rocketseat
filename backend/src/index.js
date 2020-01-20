//importando biblioteca express...
const express = require('express');
const mongoose = require('mongoose'); //importando banco de dados...
const routes = require('./routes'); //importando arquivo de rotas...

const app = express();

//conexão com o banco de dados mongoose...
mongoose.connect('mongodb+srv://admin:admin@cluster0-vnix3.mongodb.net/week10?retryWrites=true&w=majority', {
//retirando alguns alertas de execução...   
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

//Setando porta de acesso...
app.listen(3000);

//Anotações:

//Métodos HTTP: GET, POST, PUT, DELETE

//**Tipos de parâmetros**
//Query Params: req.query (Filtros, ordenação, paginação etc...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)