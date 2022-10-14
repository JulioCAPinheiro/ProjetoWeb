const rotas = require("express").Router();
const home = require("../controller/Homer");
const Cadastro = require("../controller/Cadastro");
const login = require("../controller/Login");

rotas.get("/", home.getTodos);
rotas.get("/login", login.getLogin);

rotas.get("/cadastro", Cadastro.getCadastro);
rotas.post("/create", Cadastro.CriarCadastro);

module.exports = rotas;