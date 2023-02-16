//FOR LOOP
// let texto = ''; 

// for(i = 0; i <= 50; i++) {
//     texto = texto + i + '</br>';
// }

// document.getElementById('demo').innerHTML = texto; 

//FOR LOOP ARRAY 

// let carros = ['Ferrari', 'Corsa', 'Mustang', 'Fusca', 'Chevette']; 

// let html = '<ul></ul>';

// for(let i in carros) {
//     html += `<li> ${carros[i]} </li>`;
// }

// document.getElementById('demo').innerHTML = html;  

//LOOP WHILE 

let html = '';

let c = 0;

while(c < 10) {
    html += `Numero: ${c} </br>`;
    c++
}

for(let c = 0; c < 10; c++) {
    html += `Numero: ${c} </br>`;
}

document.getElementById('demo').innerHTML = html;  

