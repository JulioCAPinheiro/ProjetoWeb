const getTodos = (req, res) => {
    return res.render("home");
};

const getCadastro = (req,res) =>{
    return res.render("cadastro");
}

const getLogin = (req,res) =>{
    return res.render("Login")
}


/*
const Criar = (req,res) =>{
    const empresa = req.body;

    if(!Trabalhando.empresa){
        return res.redirect("/")
    }
}
*/

module.exports = {
    getTodos,
    getCadastro,
    getLogin,
}