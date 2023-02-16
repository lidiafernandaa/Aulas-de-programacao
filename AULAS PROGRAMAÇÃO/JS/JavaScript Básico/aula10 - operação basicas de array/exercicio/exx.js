// 1. No array abaixo, qual o número que pega a ferrari?
let carros = ['BW', 'Ferrari', 'Mercedes']; 
let x = carros[1];
console.log(`1. ${x}`);

//2. Troque a Ferrari por Audi

console.log(`2. Lista com Audi:`);
carros[1] = 'Audi'
console.log(carros);

//3. Adicione o Volvo a lista

console.log(`3. Lista com Volvo: `);
carros.push('Volvo');
console.log(carros);

//4. Exiba quantos itens tem no array
console.log(`4. itens no array:`); 
console.log(`contém ${carros.length} itens na lista.`);