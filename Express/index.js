const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

 app.get('/blog',function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("ola "+req.params.nome+"cargo "+req.params.cargo);
  
})
 

app.listen(8090, function(){
    console.log("Servidor rodando na porta 8090");
});
