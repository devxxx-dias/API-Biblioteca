
const express = require('express');

const rotas = express.Router();

const { listarLivros, consultarLivro_Id, adicionarLivro, atualizarLivro, atualizarCampoDoLivro, removerLivro } = require('../Controladores/controlador')

rotas.get('/livros', listarLivros)

rotas.get('/livros/:id', consultarLivro_Id)

rotas.post('/livros', adicionarLivro)

rotas.put('/livros/:id', atualizarLivro)

rotas.patch('/livros/:id', atualizarCampoDoLivro)

rotas.delete('/livros/:id', removerLivro)

module.exports = rotas;