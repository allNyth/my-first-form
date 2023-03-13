const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routers/index');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

// configurando o express para receber requisiçoes json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// configurando a view engine EJS no express
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')) //configura a pasta public para enviar arquivos estaticos MIME-TYPES

const db = require('./database/connect')

app.use('/', router)
// console.log(new Date().toLocaleString('pt-br', {day: '2-digit', month: '2-digit', year:'numeric'}))

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})