const express = require('express');
const app = express();
const fs = require('fs');
const homehtml = fs.readFileSync('telaInicial.html');
const cardapio = fs.readFileSync('cafemenu.html');
const csscardapio = fs.readFileSync('style.css');

//const getip = require('./getIP');


app.listen(8888, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor')
    } else {
        console.log('Servidor online.')
    }
})

app.get("/", function(request, response) {
    response.end(homehtml);
})

app.get("/cardapio", function(request, response){
    response.end('/CafeMenu');
    
})

