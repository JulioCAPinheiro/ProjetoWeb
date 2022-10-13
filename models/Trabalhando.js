const mongo = require('mongoose');

const empresa = new mongo.Schema({
    Empresa: {
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

module.exports = mongo.model("Empresa", empresa);