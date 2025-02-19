// Exemplos de uso do FILTER() em JavaScript

// 1. Filtrar números pares de um array
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// 2. Filtrar objetos de um array
const usuarios2 = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 17 },
    { nome: "Carlos", idade: 30 },
    { nome: "Diana", idade: 16 }
];

const adultos = usuarios.filter(user => user.idade >= 18);
console.log(adultos);
/*
[
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 }
]
*/

// 3. Filtrar palavras com mais de 5 letras
const palavras = ["carro", "avião", "ônibus", "barco", "bicicleta"];
const longas = palavras.filter(palavra => palavra.length > 5);
console.log(longas); // ["avião", "ônibus", "bicicleta"]

// 4. Uso do operador spread para manter imutabilidade
const produtos2 = [
    { nome: "Mouse", preco: 50, estoque: true },
    { nome: "Teclado", preco: 100, estoque: false },
    { nome: "Monitor", preco: 700, estoque: true }
];

const produtosDisponiveis = produtos2.filter(produto => produto.estoque);
console.log(produtosDisponiveis);
/*
[
  { nome: "Mouse", preco: 50, estoque: true },
  { nome: "Monitor", preco: 700, estoque: true }
]
*/

// 5. Filtrar números maiores que a média do array
const calcularMedia = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;
const media = calcularMedia(numeros);
const maioresQueMedia = numeros.filter(num => num > media);
console.log(maioresQueMedia); // Exemplo: [6, 7, 8, 9, 10]