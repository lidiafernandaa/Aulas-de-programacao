let cartao = '557555755575'; 

let lastDigits = cartao.slice(-4); 

let cartaoMas = lastDigits.padStart(12, "*")

console.log(`Este é o seu cartão? ${cartaoMas}`);
 