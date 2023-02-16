const texto = document.querySelector(".texto");
const res = document.querySelector(".res");
const botao = document.querySelector(".botao");

function clica() {
    if(texto.value === Focus) {
       const newimg =  document.createElement('img');
        newimg.innerHTML = "image.png"; 
        res.after(newimg); 
        const newP = document.createElement('p'); 
        newP.innerHTML = "você acabou de comprar esse produto!"
        res.append(newP); 
    }
}

botao.addEventListener('click', clica); 