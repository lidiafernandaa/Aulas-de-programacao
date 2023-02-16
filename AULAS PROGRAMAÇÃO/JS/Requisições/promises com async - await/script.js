async function clicou() {
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json(); 
    alert(`Título do primeiro post: ${json[0].title}`);

    alert('clicou!'); 
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste', 
                body: 'Corpo de teste',
                userId: 2
            })
        });
   let json = await response.json(); 
   console.log(json); 
}



document.querySelector('#botao').addEventListener('click', 
clicou);
document.querySelector('#inserir').addEventListener('click', 
inserir);