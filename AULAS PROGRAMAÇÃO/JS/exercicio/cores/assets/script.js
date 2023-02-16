
function clica() {
    let mean = document.querySelector('#mean');
    let txt = document.querySelector('#txt').value;
    if (txt === 'preto') {
        mean.innerHTML = `<p><strong>Preto:</strong> Respeito, morte, isolamento, medo, solidão</p>`;
    } else if (txt === 'branco') {
        mean.innerHTML = `<p><strong>Branco:</strong> Paz, pureza e limpeza</p>`;
    } else if (txt === 'laranja'){
        mean.innerHTML = `<p><strong>Laranja:</strong> Alegria, vitalidade, prosperidade e sucesso</p>`;
    } else if (txt === 'marron') {
        mean.innerHTML = `<p><strong>Marron:</strong> Seriedade e integridade</p>`;
    } else if (txt === 'rosa') {
        mean.innerHTML = `<p><strong>Rosa:</strong> Romantismo, ternura e ingenuidade</p>`;
    } else if (txt === 'vermelho') {
        mean.innerHTML = `<p><strong>Vermelho:</strong> Paixão, energia e excitação</p>`;
    } else if (txt === 'cinza') {
        mean.innerHTML = `<p><strong>Cinza:</strong> Neutralidade e estabilidade</p>`; 
    } else if (txt === 'roxo') {
        mean.innerHTML = `<p><strong>Roxo:</strong> Espiritualidade, magia e mistério</p>`;
    } else if (txt === 'amarelo') {
        mean.innerHTML = `<p><strong>Amarelo:</strong> Luz, calor, otimismo, descontração e alegria</p>`;
    } else if (txt === 'verde') {
        mean.innerHTML = `<p><strong>Verde:</strong> Esperança, liberdade, saúde e vitalidade</p>`;
    } else if (txt === 'azul') {
        mean.innerHTML = `<p><strong>Azul:</strong> tranquilidade, serenidade, harmonia</p>`; 
    } else {
        mean.innerHTML = '<p>Digite alguma das cores acima!</p>'; 
    }
}






