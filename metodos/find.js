// Exemplo 1: Encontrar o primeiro número maior que 10
const numbers = [5, 12, 8, 130, 44];

const result = numbers.find(num => num > 10);
console.log('Primeiro número maior que 10:', result); // 12

// Exemplo 2: Encontrar um objeto no array baseado em uma propriedade
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const user = users.find(user => user.id === 2);
console.log('Usuário com ID 2:', user); // { id: 2, name: 'Bob' }

// Exemplo 3: Caso não encontre nenhum elemento
const numbers2 = [2, 4, 6, 8];

const result2 = numbers2.find(num => num > 10);
console.log('Número maior que 10:', result2); // undefined

// Exemplo 4: Comparação com filter()
const numbers3 = [1, 2, 3, 4, 5];

// Usando find
const firstEven = numbers3.find(num => num % 2 === 0);
console.log('Primeiro número par:', firstEven); // 2

// Usando filter
const evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log('Todos os números pares:', evenNumbers); // [2, 4]

// Exemplo 5: Usando find com objetos mais complexos
const products = [
  { id: 1, name: 'Notebook', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 }
];

const expensiveProduct = products.find(product => product.price > 1000);
console.log('Produto mais caro:', expensiveProduct); // { id: 1, name: 'Notebook', price: 1200 }
