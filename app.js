const express = require('express');
const app = express();
const port = 3000;
const Customer = require('./models/customer');

app.get('/', (req, res) => {
    // código
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})