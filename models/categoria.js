var sequelize = require("sequelize")
var banco = require("./../configs/bancoConfig")

var categoria = banco.define('categoria', {
    idCategoria: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

categoria.sync()

module.exports = categoria