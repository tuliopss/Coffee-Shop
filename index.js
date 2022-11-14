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
app.set('views', path.join(__dirname, '/views')) //render


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public')); //upar css e js
app.use(express.static(__dirname + '/CafeMenu')); //upar css e js

var pedidos = require('./pedidos.js')

app.listen(8888, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor')
    } else {
        console.log('Servidor online.')
    }
})

app.get('/cadastro', function(request, response){
    response.render('cadastro') //Completar a tela de cadastro
})



app.post('/', function(request, response) {
  

    const login = 'admin';
    const password = 123;
    if (request.body.login == login && request.body.password == password) {
        //Logado c sucesso
        console.log('Logado com sucesso')
        response.redirect('/home')

    } else {
    console.log('Login inválido')
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
     " 4 - Mocha",
     " 5 - Café com Leite"];

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
     " 4 - Mocha",
     " 5 - Café com Leite"];

    const {index} = request.params;
    if(index == 0) {
            response.render('vanilla');
            let valor = pedidos.valor(0);
            console.log('Você escolheu o café: ' + itens[index])          


            }else if (index == 1) {
            response.render('caramel');
            let valor = pedidos.valor(1);
            console.log('Você escolheu o café: ' + itens[index])                                                                       


            
             } else if (index == 2) {
            response.render('pumpkin');
            let valor = pedidos.valor(2);
            console.log('Você escolheu o café: ' + itens[index])                                                                          
             } else if (index == 3) {
            response.render('hazelnut')
            let valor = pedidos.valor(3);
            console.log('Você escolheu o café: ' + itens[index])                                                                          

             } else if (index == 4) {
            response.render('mocha')
            let valor = pedidos.valor(4);
            console.log('Você escolheu o café: ' + itens[index])       
                                                                               

            } else if (index == 5) {
            response.render('leite')
            let valor = pedidos.valor(5);
            console.log('Você escolheu o café: ' + itens[index])                                                                          


            } else if (index > 5) {
                response.send('<h1>Item não registrado</h1>')
            }
    
    //Gerar uma interface gráfica interativa para escolher um pedido

})

app.get('/sobremesa', function(req, res){
    const sobremesa = [ "0 - Donut ",
    " 1 - Cherry Pie",
    " 2 - Cinnammon Roll",
    " 3 - Cheesecake"
    ]
    console.log(sobremesa);
    res.render('sobremesa')
})




   






