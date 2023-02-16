function alterar(titulo) {
    document.querySelector('.titulo').innerHTML = titulo;
    document.querySelector('.campo').value = titulo;  
}

alterar('Título de exemplo'); 

function somar(x, y) {
    total = x + y;

    document.querySelector('.campo').value = total;
}

somar(15, 9); 