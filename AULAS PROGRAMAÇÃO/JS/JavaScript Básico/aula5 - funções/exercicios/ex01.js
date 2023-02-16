/*
Calcule  porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Formula da porcentagem: (y / x) * 100
Uso da função:

let x = 40;
let y = 10;
let pct = calcpct(x, y); 
console.log(`$(pct)% de ${x} é ${y}`);
*/

function porcentagem(x, y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = porcentagem(x, y); 

console.log(`${pct} % de ${x} é ${y}`);