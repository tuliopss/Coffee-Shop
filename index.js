const { text } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const login = fs.readFileSync('login.html');
const cardapio = fs.readFileSync('cafemenu.html');
const home = fs.readFileSync('index.html');
app.use(express.static(__dirname + '/public')) //upar css e js

//app.use(express.static('css'));
//app.static('/css', '/Nuvem/css/styles.css');



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


app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'))
    //Imagem simbólica do restaurante. Não sai junto do arquivo html
    
})


app.get("/cardapio", function(request, response){
    const itens = ["French Vanilla", "Caramel Macchiato", "Pumpkin Spice ", "Hazelnut", "Mocha"];
    //console.log(itens);
    response.end(cardapio);


})

app.get("/cardapio/pedido", function(request, response){
    const itens = [" 0 - French Vanilla",
     " 1 - Caramel Macchiato", 
     " 2 -Pumpkin Spice ", 
     " 3 -Hazelnut", 
     " 4 - Mocha"];

    
    response.send("Escolha o seu café:" + itens)    
    console.log(itens)                                                                            //" <br><input type='text' id='pedido'> " + " <br><button onclick='pedido()'>Escolher</button>") //concatenar. nao envia 2 sends
 
})



app.get("/cardapio/pedido/:index", function(request, response){
    const itens = [" 0 - French Vanilla",
     " 1 - Caramel Macchiato", 
     " 2 -Pumpkin Spice ", 
     " 3 -Hazelnut", 
     " 4 - Mocha"];

    const {index} = request.params;


    response.send("Escolha o seu café:" + itens)    
    console.log('Você escolheu o café: ' + itens[index])                                                                            //" <br><input type='text' id='pedido'> " + " <br><button onclick='pedido()'>Escolher</button>") //concatenar. nao envia 2 sends
 
})




   






