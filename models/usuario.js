var sequelize = require("sequelize")
var banco = require("./../configs/bancoConfig")

var usuario = banco.define('usuario', {
    idUsuario: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

usuario.sync()

module.exports = usuario