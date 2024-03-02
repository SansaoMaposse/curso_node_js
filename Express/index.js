const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Seja bem-vindo ao App com Node.js');
});

app.get('/sobre', function(req, res){
    res.send('Saiba um pouco sobre me');
})

 app.get('/blog',function(req, res){
    res.send('Meu blog');
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send('Olá');
})
 

app.listen(8090, function(){
    console.log("Servidor rodando na porta 8090");
});
