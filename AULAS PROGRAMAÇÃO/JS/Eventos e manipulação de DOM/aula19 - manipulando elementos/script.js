function clicou() {
    const texto = document.querySelector('.texto');
    const botao = document.querySelector('.botao');


    if(texto.getAttribute('type') === 'text') {
        texto.setAttribute('type', 'password');
        botao.innerText = 'Mostrar senha';
    } else {
        texto.setAttribute('type', 'text');
        botao.innerText = 'Ocutar senha';
    }
   
}

    //console.log(texto.getAttribute('placeholder'));
    // if(texto.hasAttribute('placeholder')) {
    //     console.log('Tem placeholder sim!'); 
    //     } else {
    //         console.log('Não tem placeholder!');
    //     }