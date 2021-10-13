const express = require('express');
const app = express();
const port = 3000;
const customerFunction = require('./models/customer');

app.get('/', (req, res) => {
    customerFunction();
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})