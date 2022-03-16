document.querySelector('#titulo').innerHTML = 'Mudando o titulo';

document.querySelector('ol.lista').innerHTML = 'Mudando a lista';

let lista = document.querySelectorAll('li');

for(let i in lista){
    lista[i].style.color = '#FF0000';
}