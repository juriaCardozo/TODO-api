var tarefa = require("../models/tarefa")

var taskController = {}

taskController.create = function(req, res){
    tarefa.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        idUsuario: req.body.idUsuario,
        idCategoria: req.body.idCategoria
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send("Erro no cadastro do usuario: "+erro)    
    })
}

taskController.findOne = function (req, res) {
    tarefa.findOne({
        raw: true,
        where: {
            idTarefa: req.params.id
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

taskController.findAll = function(req, res){
    tarefa.findAll({
        raw: true
    }).then((dados) => {
        res.status(200).send(dados)
    }).catch((erro) => {
        res.status(500).send(`Erro ao buscar os usuarios: `+erro)
    })
}

taskController.update = function(req, res){
    tarefa.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao
    },{
        where: {
            idTarefa: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao atualizar o usuario: `+erro)
    })
}

taskController.destroy = function(req, res){
    tarefa.destroy({
        where: {
            idTarefa: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.status(500).send(`Erro ao remover o usuario: `+erro)
    })
}

module.exports = taskController