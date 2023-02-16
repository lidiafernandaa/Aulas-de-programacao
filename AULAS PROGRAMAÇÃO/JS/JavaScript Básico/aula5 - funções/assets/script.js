// function somar(x, y) {
// const resultado = x * y;
// console.log(`Resultado: ${resultado}`)
// }
// somar(100, 10);

// function nomecompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`;
// }

// let nome = nomecompleto('Lídia', 'Fernanda');
// console.log(nome);

function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 39;
let verificar = maiorDeIdade(idade);

if (verificar) {
    console.log('É maior de idade');
} else {
    console.log('É menor de idade');
}


