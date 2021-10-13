const express = require('express');
const app = express();
const port = 3000;
const Customer = require('./models/customer');
const Log = require('./middleware/log');

app.post('/', () => {
    Customer.getCustomer();
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})