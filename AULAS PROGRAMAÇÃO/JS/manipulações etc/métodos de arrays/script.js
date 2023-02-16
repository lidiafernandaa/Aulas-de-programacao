let lista = [
    {id: 1, nome: 'Lídia', sobrenome: 'Fernanda'}, 
    {id: 2, nome: 'Leticia', sobrenome: 'Cristina'},
    {id: 3, nome: 'Luan', sobrenome: 'Santana'}
];

let pessoa = lista.findIndex(function(item) {
    return (item.sobrenome === 'Cristina') ? true : false; 
}); 

let res  = pessoa;


console.log(res);