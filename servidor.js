var express = require("express")
var rotas = require('./routes/route')

var aplicacao = express()
var PORTA = 80

var cors = require('cors')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

aplicacao.use(cors(corsOptions))

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