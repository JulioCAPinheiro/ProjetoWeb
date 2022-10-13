const express = require("express");
const path = require("path");
const rotas = require("./routes/rotas");
const bancoDb = require("./dataBS/db");

bancoDb();
const app = express();
const port = 3000;

app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(rotas)

app.listen(port, () => console.log(`Servidor Rodando em http://localhost:${port}`));