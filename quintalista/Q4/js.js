let produto = {
    nome: "Camiseta",
    preco: 29.99,
    quantidade: 50
};

let valorTotalEstoque = produto.preco * produto.quantidade;

console.log(`Valor total do estoque de ${produto.nome}: R$ ${valorTotalEstoque.toFixed(2)}`);
