const mongo = require('mongoose');

const CadastEmpresas = new mongo.Schema({
    empresas: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true,
    },
    data: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongo.model("empresas", CadastEmpresas);