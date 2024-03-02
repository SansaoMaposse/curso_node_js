const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Seja bem-vindo ao App com Node.js');
});
 

app.listen(8090, function(){
    console.log("Servidor rodando na porta 8090");
});
