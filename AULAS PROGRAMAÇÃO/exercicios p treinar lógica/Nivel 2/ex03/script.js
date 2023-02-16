
function clique() {
    let res = document.querySelector('.res');
    let num1 = window.prompt('Digite um número: ');
    let num2 = window.prompt('Digite outro numero: ');
    
    if(num1 > num2) {
        res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, o maior valor é ${num1}</p>`;
    } else if(num2 > num1) {
        res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, o maior valor é ${num2}</p>`;
    } else {
        res.innerHTML += `<p>Analisando os valores ${num1} e ${num2}, ambos são iguais.</p>`;
    }
}