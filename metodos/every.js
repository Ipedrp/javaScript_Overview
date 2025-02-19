// Exemplo 1: Verificar se todos os números são positivos
const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(num => num > 0);
console.log('Todos os números são positivos?', allPositive); // true

// Exemplo 2: Verificar se todos os elementos de um array de objetos possuem uma propriedade
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: true },
  { name: 'Charlie', active: true }
];

const allActive = users.every(user => user.active === true);
console.log('Todos os usuários estão ativos?', allActive); // true

// Exemplo 3: Caso um elemento não satisfaça a condição
const numbers2 = [1, 2, 3, -4, 5];

const allPositive2 = numbers2.every(num => num > 0);
console.log('Todos os números são positivos?', allPositive2); // false

// Exemplo 4: Comparação com some()
const numbers3 = [1, 2, 3, 4, 5];

// Usando every
const allPositive3 = numbers3.every(num => num > 0);
console.log('Todos os números são positivos?', allPositive3); // true

// Usando some
const anyNegative = numbers3.some(num => num < 0);
console.log('Existe algum número negativo?', anyNegative); // false

// Exemplo 5: Verificar se todas as idades em um array são maiores ou iguais a 18 (maiores de idade)
const ages = [20, 25, 30, 18, 40];

const allAdults = ages.every(age => age >= 18);
console.log('Todas as idades são de maiores de idade?', allAdults); // true

// Exemplo 6: Verificar se todas as strings têm mais de 3 caracteres
const strings = ['apple', 'banana', 'pear', 'grape'];

const allLongStrings = strings.every(str => str.length > 3);
console.log('Todas as strings têm mais de 3 caracteres?', allLongStrings); // true

// Exemplo 7: Verificar se todas as entradas de um array de números são pares
const numbers4 = [2, 4, 6, 8, 10];

const allEven = numbers4.every(num => num % 2 === 0);
console.log('Todos os números são pares?', allEven); // true

// Exemplo 8: Verificar se todas as entradas de um array de strings contêm apenas letras minúsculas
const words = ['apple', 'banana', 'grape'];

const allLowerCase = words.every(word => word === word.toLowerCase());
console.log('Todas as palavras estão em letras minúsculas?', allLowerCase); // true
