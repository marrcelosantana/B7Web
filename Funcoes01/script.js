function alterar(titulo, campo){
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = campo;
    alterar('Novo título!', 'Novo campo!');
}

function somar(x, y){
    var total = x + y;
    return total;
}
