const express = require('express');
const app = express();
const fs = require('fs');
const homehtml = fs.readFileSync('telaInicial.html');

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