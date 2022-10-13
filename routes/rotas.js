const rotas = require("express").Router();
const atividade = require("../controller/Homer");
const Cadastro = require("../controller/Homer");
const login = require("../controller/Homer");

rotas.get("/", atividade.getTodos);
rotas.get("/cadastro", Cadastro.getCadastro);
rotas.get("/login", login.getLogin);

module.exports = rotas;