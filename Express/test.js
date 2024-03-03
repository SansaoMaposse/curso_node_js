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

const Usuario = sequilize.define('usuarios',{
    nome:{
        type: Sequilize.STRING
    },
    sobreNome:{
        type: Sequilize.STRING
    },
    idade:{
        type: Sequilize.INTEGER
    },
    email:{
        type: Sequilize.STRING
    }
})
Usuario.sync({force: true})
