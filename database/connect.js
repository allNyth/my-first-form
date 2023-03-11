const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const uri = `mongodb+srv://${process.env.database_name}:${process.env.database_pass}@cluster1.jfcxcpk.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conexao estabelecida com o banco de dados'))

// const User = mongoose.model('user', {
//     name: String,
//     age: Number,
//     email: String
// })

// const user = new User ({
//     name: 'All Nyth',
//     age: 24,
//     email: 'allnyth@contato.com'
// })
// user.save().then(() => console.log('Usuario cadastrado no banco de dados com sucesso'))

module.exports = mongoose