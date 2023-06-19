var categoria = require("../models/categoria")

var categoryController = {}

categoryController.create = function(req, res){
    categoria.create({
        nome: req.body.nome
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send("Erro no cadastro do usuario: "+erro)    
    })
}

categoryController.findOne = function (req, res) {
    categoria.findOne({
        raw: true,
        where: {
            idCategoria: req.params.id
        }
    }).then(
        function (dados) {
            res.status(200).send(dados)
        }
    ).catch(
        function (erro) {
            res.status(500).send(`Erro ao buscar pelo usuario id ${req.params.id} informado: ` + erro)
        }
    )
}

categoryController.findAll = function(req, res){
    categoria.findAll({
        raw: true
    }).then((dados) => {
        res.status(200).send(dados)
    }).catch((erro) => {
        res.status(500).send(`Erro ao buscar os usuarios: `+erro)
    })
}

categoryController.update = function(req, res){
    categoria.update({
        nome: req.body.nome,
    },{
        where: {
            idCategoria: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao atualizar o usuario: `+erro)
    })
}

categoryController.destroy = function(req, res){
    categoria.destroy({
        where: {
            idCategoria: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao remover o usuario: `+erro)
    })
}

module.exports = categoryController