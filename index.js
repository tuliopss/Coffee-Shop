const { text, response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
//const session = require('express-session')
//const fs = require('fs');

const app = express();

//const login = fs.readFileSync('login.html');
//const cardapio = fs.readFileSync('cafemenu.html');
//const home = fs.readFileSync('index.html');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'))




app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public')); //upar css e js
app.use(express.static(__dirname + '/CafeMenu')); //upar css e js


app.listen(8888, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor')
    } else {
        console.log('Servidor online.')
    }
})

app.get('/cadastro', function(request, response){
    response.render('cadastro.html') //Completar a tela de cadastro
})



app.post('/', function(request, response) {
    var login = 'admin';
    var password = 123;
    if (request.body.login == login && request.body.password == password) {

        //Logado c sucesso

        console.log('Logado com sucesso')
        response.redirect('/home')
    } else {
    
    response.render('login')
    }

})

app.get('/', function (request, response) {
    response.render('login');

    if (request.body.session) {
        response.sendFile(path.join(__dirname + '/index.html'))

    }
})


app.get("/home", function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'))
    
})


app.get("/cardapio", function(request, response){
    const itens = ["French Vanilla", "Caramel Macchiato", "Pumpkin Spice ", "Hazelnut", "Mocha"];
    response.render('cafemenu');

})

app.get("/cardapio/pedido", function(request, response){
    const itens = 
    [" 0 - French Vanilla",
     " 1 - Caramel Macchiato", 
     " 2 -Pumpkin Spice ", 
     " 3 -Hazelnut", 
     " 4 - Mocha"];

    //Gerar uma interface gráfica para os pedidos
    response.render('pedido')
    //response.send("Escolha o seu café:" + itens)    
    console.log(itens)                                                                            //" <br><input type='text' id='pedido'> " + " <br><button onclick='pedido()'>Escolher</button>") //concatenar. nao envia 2 sends
 
})



app.get("/cardapio/pedido/:index", function(request, response){
    const itens = [" 0 - French Vanilla",
     " 1 - Caramel Macchiato", 
     " 2 -Pumpkin Spice ", 
     " 3 -Hazelnut", 
     " 4 - Mocha"];

    const {index} = request.params;
    if (index > 4) {
        console.log('Item inválido')
        
    }

    //Gerar uma interface gráfica interativa para escolher um pedido
    
    response.send("Escolha o seu café:" + itens)    
    console.log('Você escolheu o café: ' + itens[index])                                                                            //" <br><input type='text' id='pedido'> " + " <br><button onclick='pedido()'>Escolher</button>") //concatenar. nao envia 2 sends
 
})




   






