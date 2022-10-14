const CadastreEmpresa = require("../models/CadastroEmpresa");

const getCadastro = async (req, res) => {
    try {
        const ListEmpresa = await CadastreEmpresa.find();
        return res.render("cadastro", ListEmpresa);
    } catch (err) {
        res.status(500).send({ Error: err.message });
    }
}

const CriarCadastro = async (req, res) => {
    const FODASE = req.body;

    if (!FODASE.FODASE) {
        return res.redirect("/");
    }

    try {
        await CadastreEmpresa.create(Empresa);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ Error: err.message });
    }
}


module.exports = {
    getCadastro,
    CriarCadastro,
}