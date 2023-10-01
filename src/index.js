
const express = require('express');

const app = express();

const rotas = require('./roteador')

app.use(express.json());

app.use(rotas);

app.listen(3000, () => { console.log("server is running on port 3000") })
