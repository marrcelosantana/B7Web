function digitou(e){
    if(e.keyCode == 13 && e.ctrlKey == true){ //tecla enter + ctrl
        var texto = document.getElementById('campo').value;

        console.log(texto);
    }
}