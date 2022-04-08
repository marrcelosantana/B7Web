let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];

console.log(carros[0]); // Para printar o índice

console.log(carros.length); //Printar o tamanho do array

//Colocando uma função dentro de um arrar:

let carros2 = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari',
    function test(){
        console.log('Testando...');
    }
    ];

carros2[4]();

//Declarando array dentro de outro array:

let ingredientes = [
    ['uva', 'pêra', 'maçã'],
    ['arroz','macarrão']
];

console.log(ingredientes);

// Acessando o primeiro array e o primeiro item:

console.log(ingredientes[0][0]);
