var express = require("express")
var rotas = require('./routes/route')

var aplicacao = express()
var PORTA = 80

//Midleware
aplicacao.use((req,res, next) => {
    res.locals.user = req.user || null
    next()
})

aplicacao.use(express.urlencoded({extended: true}))
aplicacao.use(rotas)

aplicacao.listen(PORTA, function(){
    console.log(`Servidor http rodando na porta ${PORTA}...`);
})