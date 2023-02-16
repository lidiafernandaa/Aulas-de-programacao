let acaoP = document.querySelector('.acaoP');
let acaoS = document.querySelector('.acaoS');
let acaoT = document.querySelector('.acaoT');
let acaoQ = document.querySelector('.acaoQ');
let res = document.querySelector('.res')

function clicouP() {
    res.innerHTML += '<p><strong>Clicou no primeiro botão</strong></p>'; 
}

function clicouS() {
    res.innerHTML += '<p><strong>Clicou no segundo botão</strong></p>'; 
}


function clicouT() {
    res.innerHTML += '<p><strong>Clicou no terceiro botão</strong></p>'; 
}


function clicouQ() {
    res.innerHTML += '<p><strong>Clicou no quarto botão</strong></p>'; 
}

acaoP.addEventListener('click', clicouP);
acaoS.addEventListener('click', clicouS);
acaoT.addEventListener('click', clicouT);
acaoQ.addEventListener('click', clicouQ);
