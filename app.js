const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routers/index');
const PORT = process.env.PORT 

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})