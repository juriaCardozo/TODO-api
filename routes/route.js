var express = require('express')
var userController = require('../controllers/userController')
var taskController = require('../controllers/taskController')
var categoryController = require('../controllers/categoryController')

var rotas = express.Router()

rotas.post("/cadastrarUsuario", userController.create);
rotas.put("/editarUsuario/:id", userController.update);
rotas.delete("/deletarUsuario/:id", userController.destroy);
rotas.get("/usuarios", userController.findAll);
rotas.get("/usuario/:id", userController.findOne);

rotas.post("/cadastrarTarefa", taskController.create);
rotas.put("/editarTarefa/:id", taskController.update);
rotas.delete("/deletarTarefa/:id", taskController.destroy);
rotas.get("/tarefas", taskController.findAll);
rotas.get("/tarefa/:id", taskController.findOne);

rotas.post("/cadastrarCategoria", categoryController.create);
rotas.put("/editarCategoria/:id", categoryController.update);
rotas.delete("/deletarCategoria/:id", categoryController.destroy);
rotas.get("/categorias", categoryController.findAll);
rotas.get("/categoria/:id", categoryController.findOne);

module.exports = rotas