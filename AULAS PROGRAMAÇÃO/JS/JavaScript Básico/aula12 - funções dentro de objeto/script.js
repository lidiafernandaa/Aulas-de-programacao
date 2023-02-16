let pessoa = {
    nome: 'Lídia',
    sobrenome: 'Fernanda', 
    idade: 21, 
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
   
}
console.log(pessoa.nomeCompleto());