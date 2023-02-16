let contador = 0; 
let res = document.querySelector('.res'); 


function contar() { 
    contador++ 
    res.innerHTML = `<p>O conatdor está com ${contador} cliques.</p>`
} 

function zerar() {
    contador = 0;
    res.innerHTML = null;
}

