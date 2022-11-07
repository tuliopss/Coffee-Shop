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

    let email = request.query.email;
    let senha = request.query.senha;

    if (email == undefined && senha == undefined) {
        return response.send('Insira seu email e senha');
    } else if (email == undefined && senha != undefined) {
        return response.send('Informe seu email');
    } else if (email != undefined && senha == undefined) {
        return response.send('Insira sua senha');
    }  else if (email != undefined && senha != undefined) {
        return response.send('Seja bem vindo!');
        //redireciona para o /home
    }
})


app.get("/home", function(request, response){
    response.end(home);
})


app.get("/cardapio", function(request, response){
    const itens = ["French Vanilla", "Caramel Macchiato", "Pumpkin Spice ", "Hazelnut", "Mocha"];
    response.send(itens);
    //response.end(cardapio);

    let itemPedido = request.query.itemPedido
    var carrinho = [];

    

    function pedido(itemPedido) {  
        for (let i = 0; i < itens.length; i++) {
            
    }

    }
    pedido(2)

   
    
})

