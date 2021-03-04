let dia = 5;
let diaNome = '';

//O break é obrigatório em todos os cases.

switch(dia){
    case 6:
        diaNome = 'Final de semana';
        break;
    case 7:
        diaNome = 'Final de semana';
        break;
    default:
        diaNome = 'Dia de semana';
        break;      
}

document.getElementById('tipo').innerHTML = `Hoje é ${diaNome}!`;