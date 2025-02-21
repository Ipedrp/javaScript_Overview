// Conversão de Objeto para JSON
const produto = {
    id: 1,
    nome: "Pneu 175/70 R14",
    preco: 250.00,
    estoque: true
};

// Convertendo o objeto para JSON
const produtoJSON = JSON.stringify(produto);
console.log("Objeto para JSON:", produtoJSON);
// Saída: {"id":1,"nome":"Pneu 175/70 R14","preco":250,"estoque":true}

// Conversão de JSON para Objeto
const jsonText = '{"id":2,"nome":"Óleo Lubrificante","preco":50.00,"estoque":false}';

// Convertendo o JSON para um objeto JavaScript
const produtoObjeto = JSON.parse(jsonText);
console.log("JSON para Objeto:", produtoObjeto);
// Saída: { id: 2, nome: 'Óleo Lubrificante', preco: 50, estoque: false }

// Manipulando o Objeto convertido
console.log(`O produto ${produtoObjeto.nome} custa R$${produtoObjeto.preco}`);
// Saída: O produto Óleo Lubrificante custa R$50
