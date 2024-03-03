const Sequilize = require('sequelize');
const sequilize = new Sequilize('test', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequilize.define('postagens',{
    titulo:{
        type: Sequilize.STRING,
    },
    conteudo:{
        type: Sequilize.TEXT
    }
});

Postagem.sync({force: true})
