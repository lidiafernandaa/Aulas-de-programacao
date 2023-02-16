
function clique() {
    let res = document.querySelector('.res');
    let num = Number(window.prompt('Digite um número: '));
    
    if(num % 2 === 0) {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong>`
    } else {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>IMPAR!</strong>`
    }
    
}