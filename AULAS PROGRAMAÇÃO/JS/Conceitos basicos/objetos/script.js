// let carros = {
//     nome: 'Uno',
//     marca: 'Fiat',
//     peso: '700kg', 
//     ligado: false, 
//     ligar: function() {
//         this.ligado = true;
//         console.log('Vrum Vrum');
//     },
//     acelerar: function() {
//         if(this.ligado === true) {
//             console.log('Riiiiiiiihhhh'); 
//         }
//     }
// };

// carros.ligar();
// carros.acelerar();

let carros = [
    {nome: 'Fiat', modelo: 'Palio'}, 
    {nome: 'Fiat', modelo: 'Uno'}, 
    {nome: 'Toyota', modelo: 'Corolla'}, 
    {nome: 'Ferrari', modelo: 'Spider'}
]; 

console.log(carros[1].modelo); 
