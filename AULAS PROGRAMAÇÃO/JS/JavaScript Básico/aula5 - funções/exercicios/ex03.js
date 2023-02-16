/*
Crie uma função que válide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

//Uso da função:


function validacao(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        console.log('Acesso concedido.'); 
    } else {
        console.log('Acesso negado!');
    }
}

let usuario = 'pedro';
let senha = '123';

let validar = validacao(usuario, senha);
