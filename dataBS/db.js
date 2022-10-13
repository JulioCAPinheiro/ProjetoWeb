const mongo = require('mongoose');

const conectaDB = () => {
    mongo.connect("mongodb+srv://user:123@google-cloud-sao-paulo.2ilorez.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
        .then(() => console.log("Servidor Conectado ao banco de dados"))
        .catch((err) => console.log(err));
};

module.exports = conectaDB;
