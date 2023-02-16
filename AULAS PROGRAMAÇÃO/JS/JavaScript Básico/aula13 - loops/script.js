// for(let n = 0; n < 10; n++ ) {
//     console.log('oii ' + n);
// }

// Dando loops em arrays

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'verde', qt: 15} 
];



// for (let n = 0; n < cores.length; n++) {
//     console.log(cores[n].nome);
// }

for (let i in cores) {
    // console.log(cores[i].nome);
    cores[i].nome = cores[i].nome.toUpperCase();
}

// for (let valor of cores) {
// console.log(`Nome: ${valor.nome} - ${valor.qt}`);
// }

console.log(cores);