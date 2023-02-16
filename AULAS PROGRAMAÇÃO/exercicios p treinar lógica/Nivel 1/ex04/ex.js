window.alert("Seja bem-vindo(a) ao meu site"); 

function clique() {
    let num = window.prompt('Digite um número: '); 
    let res = document.querySelector('.res'); 
    let dobro = num * 2;
    let metade = num / 2;
    res.innerHTML = `<p>O dobro de <mark>${num}</mark> é <strong>${dobro}</strong>, e a metade de <mark>${num}</mark> é <strong>${metade}</strong>!</p>`; 
}

let button = document.querySelector('button'); 
button.addEventListener('click', clique); 

