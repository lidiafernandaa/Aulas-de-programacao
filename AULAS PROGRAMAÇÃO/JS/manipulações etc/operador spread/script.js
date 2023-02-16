function adicionarInfo(info) {
    let novaInfo = {
        ...info, 
        status: 0,
        token: 'gkhkkjhkj',
        data_cadastro: '....' 
    };

    return novaInfo;
}

console.log(adicionarInfo({nome: 'Lídia', sobrenome: 'Fernanda'})); 