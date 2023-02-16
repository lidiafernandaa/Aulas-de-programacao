

function clica() {
    const res = document.querySelector('.res');
    const nome = document.querySelector('.nome').value; 
    const sob = document.querySelector('.sob').value;
    const idade = document.querySelector('.idade').value;

   res.innerHTML = `<p>${nome} ${sob}, Cadastro realizado com sucesso</p>`;
    
}




