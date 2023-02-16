// let nome = 'Lídia';
// let nomes = ['Lídia', 'Fernanda'];
// let personagem = {
//     nome: 'Lídia',
//     sobrenome: 'Fernanda',
//     idade: 21,
//     escolhas: ['Invisibilidade', 'Teletransporte'], 
//     caracteristícas: {
//         boas: "Inteligência",
//         ruins: 'Impaciência' 
//     }
    
// };

// console.log(`O sobrenome de ${personagem.nome} é ${personagem.sobrenome}`);
// console.log(`${personagem.nome} tem as seguintes caracteristicas: ${personagem.caracteristícas.boas} e ${personagem.caracteristícas.ruins}`);
// console.log(`Um poder que escolheria é ${personagem.escolhas[1]}`);

// personagem.nome = 'Katia';
// console.log(personagem.nome); 

// console.log(`${personagem.nome} ${personagem.sobrenome}`);
// personagem.escolhas.push('Telepatia');
// console.log(personagem.escolhas);

let personagem = {
    nome: 'Lídia',
    idade: 21,
    carros: [
        {modelo: 'Corsa', cor: 'cinza'},
        {modelo: 'Fiat Toro', cor: 'vermelho'}
    ]
}

personagem.carros[0].cor = 'preto'; 
console.log(personagem.carros);
