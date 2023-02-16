function clica() {
    let nome = window.prompt('Qual é o nome do aluno?');
    let pNota = window.prompt(`Qual foi a primeira nota de ${nome}`);
    let sNota = window.prompt(`Além de ${pNota}, qual foi a outra nota de ${nome}?`);
    let media = Number(pNota) + Number(sNota) / 2;
    let res = document.querySelector('.res');
    res.innerHTML = `<p>Calculando a média final de ${nome}</p>`;
    res.innerHTML += `<p>As notas obtidas foram ${pNota} e ${sNota}</p>`;
    res.innerHTML += `<p>A média final será ${media}</p>`;

}

let button = document.querySelector('button');
button.addEventListener('click', clica);