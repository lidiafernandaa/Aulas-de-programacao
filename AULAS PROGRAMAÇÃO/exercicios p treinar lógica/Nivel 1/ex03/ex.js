function clique() {
    let nome = window.prompt("Qual é o seu nome?"); 
    let newH = document.createElement('h2');
    newH.innerHTML = `Olá, é um prazer te conhecer ${nome}! 😉`;
    let res = document.querySelector('.res'); 
    res.appendChild(newH);  
}

let button = document.querySelector('button');

button.addEventListener('click', clique); 