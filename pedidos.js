function valor(index) {
    if (index == 0) {
        let preco = 3.00
        console.log('Valor do French Vanilla = ' +'$'+ preco)
    }  if (index == 1) {
        let preco = 3.75
        console.log('Valor do Caramel Macchiato= '+'$' + preco)
    }
    if (index == 2) {
        let preco = 3.50
        console.log('Valor do Pumpkin Spice = '+'$' + preco)
    }
    if (index == 3) {
        let preco = 4.00
        console.log('Valor do Hazelnut = ' +'$'+ preco)
    }
    if (index == 4) {
        let preco = 4.50
        console.log('Valor do Café com Leite = ' +'$'+ preco)
    }
    if (index == 5) {
        let preco = 2.50
        console.log('Valor = '+'$' + preco)
    }
 
}

module.exports = {
    valor
}