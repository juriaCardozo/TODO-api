var usuario = require("../models/usuario")

var userController = {}

userController.create = function(req, res){
    usuario.create({
        nome: req.body.nome
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send("Erro no cadastro do usuario: "+erro)    
    })
}

userController.findOne = function (req, res) {
    usuario.findOne({
        raw: true,
        where: {
            idUsuario: req.params.id
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

userController.findAll = function(req, res){
    usuario.findAll({
        raw: true
    }).then((dados) => {
        res.status(200).send(dados)
    }).catch((erro) => {
        res.status(500).send(`Erro ao buscar os usuarios: `+erro)
    })
}

userController.update = function(req, res){
    usuario.update({
        nome: req.body.nome
    },{
        where: {
            idUsuario: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao atualizar o usuario: `+erro)
    })
}

userController.destroy = function(req, res){
    usuario.destroy({
        where: {
            idUsuario: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao remover o usuario: `+erro)
    })
}

module.exports = userController