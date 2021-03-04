// Objeto

let carro = {

    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,

    ligar: function(){
        this.ligado = true;
        console.log("Ligando o  " +this.modelo);
        console.log('vrum vrum');              // Também pode fazer função dentro de objeto.
    },
    acelerar: function(){
        if(this.ligado == true){
            console.log('riiiiiiih');
        }else{
            console.log(this.nome + " " + this.modelo + " não está ligado!")
        }    
    }

};

console.log("Nome: " + carro.nome);            // Forma de acessar um atributo do objeto

carro.ligar();
carro.acelerar();


// Usando objetos dentro de um array:

let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Ferrari', modelo: 'Spider'},
];

console.log(carros);

console.log(carros[2].modelo);              //Acessando o modelo: Corolla 