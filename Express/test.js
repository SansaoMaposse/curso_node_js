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
// Postagem.create({
//     titulo: "llllllllllllll",
//     conteudo: "oooooooooooo"
// })

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

// Usuario.create({
//     nome: "Sansão",
//     sobreNome: "Maposse",
//     idade: 20,
//     email: "Sansaomaposse1@gmail.com"
// })
// //Usuario.sync({force: true})
