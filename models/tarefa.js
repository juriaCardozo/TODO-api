var sequelize = require("sequelize")
var banco = require("./../configs/bancoConfig")
const usuario = require("../models/usuario")
const categoria = require("../models/categoria")

var tarefa = banco.define('tarefa', {
    idTarefa: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

usuario.hasOne(tarefa, { foreignKey: "idUsuario" });
categoria.hasOne(tarefa, { foreignKey: "idCategoria" });

tarefa.sync()

module.exports = tarefa