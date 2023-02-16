let dia = 7;
let diaNome = '';

switch(dia) {
    case 6: 
    case 7: 
        diaNome = 'Final de semana';
    break;
    default:
        diaNome = 'Dia de semana'; 
    break; 

}
 
let diaSem = document.querySelector('.diaSem').innerHTML = `Hoje é <strong>${diaNome}</strong>`;
