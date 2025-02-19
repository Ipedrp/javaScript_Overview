// Exemplos de uso do MAP() em JavaScript

// 1. Dobrar valores de um array
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// 2. Transformar um array de objetos
const usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carlos", idade: 35 }
];
const nomes = usuarios.map(user => user.nome);
console.log(nomes); // ["Ana", "Bruno", "Carlos"]

// 3. Uso do operador spread para modificar objetos dentro do map
const usuariosComId = usuarios.map((user, index) => ({ ...user, id: index + 1 }));
console.log(usuariosComId);
/*
[
  { nome: "Ana", idade: 25, id: 1 },
  { nome: "Bruno", idade: 30, id: 2 },
  { nome: "Carlos", idade: 35, id: 3 }
]
*/

// 4. Criar um novo array de strings formatadas
const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 700 }
];
const descricaoProdutos = produtos.map(produto => `${produto.nome} custa R$${produto.preco}`);
console.log(descricaoProdutos);
// ["Mouse custa R$50", "Teclado custa R$100", "Monitor custa R$700"]

// 5. Modificar um array de números usando uma função externa
const adicionarImposto = preco => preco * 1.1;
const precosComImposto = produtos.map(produto => ({ ...produto, preco: adicionarImposto(produto.preco) }));
console.log(precosComImposto);
/*
[
  { nome: "Mouse", preco: 55 },
  { nome: "Teclado", preco: 110 },
  { nome: "Monitor", preco: 770 }
]
*/






