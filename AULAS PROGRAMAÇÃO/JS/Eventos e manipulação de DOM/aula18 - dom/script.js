function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul'); 

    let newUl = document.createElement("ul");
    ul.before(newUl); 

    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "item add "; 
        newUl.append(newLi); 
    }   
}













    // ul.innerHTML += "<li>Item adicionado</li>"; 
////// duas formas diferentes 
    // const newLi = document.createElement("li");
    // newLi.innerHTML = "Item adicionado"; 
    // ul.append(newLi);