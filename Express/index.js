const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


//Config
//Templete Engine
app.engine('handlebars', handlebars({
    defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

//Conexão com base de dados
const Sequilize = require('sequelize');
const sequilize = new Sequilize('test', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

app.listen(8090, function(){
    console.log("Servidor rodando na porta 8090");
});
