//elementos
let input = document.querySelector('input'); 
let lista = document.querySelector('ul'); 

//evento
input.addEventListener('keyup', handleKeyUp); 

//funções
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        input.value = ''; 
    }
}