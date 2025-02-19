// Exemplo 1: Somar todos os números de um array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Soma dos números:', sum); // 15

// Exemplo 2: Encontrar o maior número em um array
const numbers2 = [10, 25, 8, 50, 3];

const maxNumber = numbers2.reduce((max, num) => (num > max ? num : max), numbers2[0]);
console.log('Maior número:', maxNumber); // 50

// Exemplo 3: Contar a frequência de elementos em um array
const fruits = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã'];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log('Contagem de frutas:', fruitCount);
// { maçã: 3, banana: 2, laranja: 1 }

// Exemplo 4: Concatenar strings em um array
const words = ['Olá', 'mundo', 'do', 'JavaScript'];

const sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log('Frase:', sentence); // "Olá mundo do JavaScript"

// Exemplo 5: Somar os preços de um carrinho de compras
const cart = [
  { name: 'Teclado', price: 100 },
  { name: 'Mouse', price: 50 },
  { name: 'Monitor', price: 700 }
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log('Preço total do carrinho:', totalPrice); // 850

// Exemplo 6: Agrupar elementos por uma propriedade
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] || [];
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log('Pessoas agrupadas por idade:', groupedByAge);
// { '25': ['Alice', 'Charlie'], '30': ['Bob'] }

// Exemplo 7: Calcular a média dos números em um array
const numbers3 = [10, 20, 30, 40, 50];

const average = numbers3.reduce((acc, num, index, array) => {
  acc += num;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log('Média dos números:', average); // 30

// Exemplo 8: Transformar um array de objetos em um objeto único
const products = [
  { id: 1, name: 'Notebook' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Tablet' }
];

const productsMap = products.reduce((acc, product) => {
  acc[product.id] = product.name;
  return acc;
}, {});

console.log('Mapa de produtos:', productsMap);
// { '1': 'Notebook', '2': 'Smartphone', '3': 'Tablet' }

// Exemplo 9: Remover valores duplicados de um array
const duplicateNumbers = [1, 2, 3, 4, 2, 3, 5, 1];

const uniqueNumbers = duplicateNumbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log('Números únicos:', uniqueNumbers); // [1, 2, 3, 4, 5]

// Exemplo 10: Calcular o total de votos em uma eleição
const votes = ['A', 'B', 'A', 'C', 'B', 'A', 'A', 'C', 'B'];

const voteCount = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log('Total de votos:', voteCount);
// { A: 4, B: 3, C: 2 }
