function clique() {
    let nome = window.prompt("Qual é o seu nome?");
    window.alert(`É um prazer te conhecer ${nome}!`); 
}

let button = document.querySelector("button");
button.addEventListener("click", clique); 