function add(nomes, ...novosNomes) {
    
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ['Lídia', 'Fernanda'];

let outros = add(nomes, 'Antonio', 'Lucrecia', 'Jennifer'); 

console.log(outros)