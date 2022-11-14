
function valor(index) {

    let itens = [];

    function Cafe (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

        const french = new Cafe (0, 'French Vanilla', 3.00);
        const caramel = new Cafe(1, 'Caramel Macchiato', 3.75);
        const pumpkin = new Cafe(2, 'Pumpkin Spice', 3.50);
        const hazelnut = new Cafe(3, 'Hazelnut', 4.00);
        const mocha = new Cafe(4, 'Mocha', 4.50);
        const leite = new Cafe(5, 'Café com leite', 2.50);

        itens.push(french, caramel, pumpkin, hazelnut, mocha, leite);
        

    if (index == 0) {
        console.log(itens[0]);

    }  if (index == 1) {
        console.log(itens[1]);

    }

    if (index == 2) {
        console.log(itens[2]);

    }
    if (index == 3) {
        console.log(itens[3]);

    }
    if (index == 4) {
        console.log(itens[4]);

    }
    if (index == 5) {
        console.log(itens[5]);

    }
 
}


module.exports = {
    valor
}