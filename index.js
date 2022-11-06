const express = require('express');
const app = express();
const fs = require('fs');
const login = fs.readFileSync('login.html');
const cardapio = fs.readFileSync('cafemenu.html');
const home = fs.readFileSync('home.html');

//const getip = require('./getIP');


app.listen(8888, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor')
    } else {
        console.log('Servidor online.')
    }
})

app.get("/login", function(request, response) {
    response.end(login);
})


app.get("/home", function(request, response){
    response.end
})


app.get("/cardapio", function(request, response){
    response.end('cardapio');
    
})

