function clica() {
    let num = window.prompt('Digite um número: '); 
    let res = document.querySelector('.res'); 
    res.innerHTML = `<p>O número a ser analisado aqui será o <mark>${num}</mark></p><hr>`;
    res.innerHTML += `<p>O seu valor absoluto é <mark>${Math.abs(num)}</mark></p>`;
    res.innerHTML += `<p>A sua parte inteira é <mark>${Math.trunc(num)}</mark></p>`;
    res.innerHTML += `<p>O valor inteiro mais próximo é <mark>${Math.round(num)}</mark></p>`;
    res.innerHTML += `<p>A sua raiz quadrada é <mark>${Math.sqrt(num)}</mark></p>`;
    res.innerHTML += `<p>A sua raiz cúbica é <mark>${Math.cbrt(num)}</mark></p>`;
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é <mark>${Math.pow(num, 2)}</mark></p>`;
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é <mark>${Math.pow(num, 3)}</mark></p>`;

}

let button = document.querySelector('button'); 
button.addEventListener('click', clica); 