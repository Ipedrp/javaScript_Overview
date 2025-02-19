// Exemplo 1: Verificar se algum número é maior que 10
const numbers = [5, 12, 8, 130, 44];

const hasNumberGreaterThan10 = numbers.some(num => num > 10);
console.log('Existe algum número maior que 10?', hasNumberGreaterThan10); // true

// Exemplo 2: Verificar se algum usuário está ativo
const users = [
  { name: 'Alice', active: false },
  { name: 'Bob', active: true },
  { name: 'Charlie', active: false }
];

const isActiveUser = users.some(user => user.active === true);
console.log('Existe algum usuário ativo?', isActiveUser); // true

// Exemplo 3: Caso nenhum elemento atenda à condição
const numbers2 = [2, 4, 6, 8];

const hasNumberGreaterThan100 = numbers2.some(num => num > 100);
console.log('Existe algum número maior que 100?', hasNumberGreaterThan100); // false

// Exemplo 4: Comparação entre some() e every()
const numbers3 = [1, 2, 3, 4, 5];

// Usando some()
const anyGreaterThanThree = numbers3.some(num => num > 3);
console.log('Existe algum número maior que 3?', anyGreaterThanThree); // true

// Usando every()
const allGreaterThanThree = numbers3.every(num => num > 3);
console.log('Todos os números são maiores que 3?', allGreaterThanThree); // false

// Exemplo 5: Verificar se há algum produto em promoção
const products = [
  { id: 1, name: 'Notebook', price: 2000, onSale: false },
  { id: 2, name: 'Smartphone', price: 1500, onSale: true },
  { id: 3, name: 'Tablet', price: 1000, onSale: false }
];

const hasDiscountedProduct = products.some(product => product.onSale);
console.log('Existe algum produto em promoção?', hasDiscountedProduct); // true

// Exemplo 6: Verificar se há strings vazias no array
const strings = ['apple', '', 'banana', 'pear'];

const hasEmptyString = strings.some(str => str === '');
console.log('Existe alguma string vazia?', hasEmptyString); // true

// Exemplo 7: Verificar se pelo menos um aluno passou na prova
const students = [
  { name: 'Ana', grade: 7 },
  { name: 'Bruno', grade: 5 },
  { name: 'Carlos', grade: 4 }
];

const hasApprovedStudent = students.some(student => student.grade >= 6);
console.log('Existe algum aluno aprovado?', hasApprovedStudent); // true

// Exemplo 8: Verificar se pelo menos um elemento de um array é par
const numbers4 = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers4.some(num => num % 2 === 0);
console.log('Existe algum número par?', hasEvenNumber); // true

// Exemplo 9: Verificar se pelo menos um item do carrinho está acima de R$1000
const cart = [
  { name: 'Teclado', price: 200 },
  { name: 'Monitor', price: 1500 },
  { name: 'Mouse', price: 100 }
];

const hasExpensiveItem = cart.some(item => item.price > 1000);
console.log('Existe algum item no carrinho acima de R$1000?', hasExpensiveItem); // true
