// Operadores Aritméticos
let a = 10, b = 4;
console.log(`Soma: ${a} + ${b} =`, a + b); // 14
console.log(`Subtração: ${a} - ${b} =`, a - b); // 6
console.log(`Multiplicação: ${a} * ${b} =`, a * b); // 40
console.log(`Divisão: ${a} / ${b} =`, a / b); // 2.5
console.log(`Módulo: ${a} % ${b} =`, a % b); // 2
console.log(`Exponenciação: ${a} ** ${b} =`, a ** b); // 10000

// Operadores de Atribuição
let c = 20;
c += 5; console.log("c += 5 ->", c); // 25
c -= 3; console.log("c -= 3 ->", c); // 22
c *= 2; console.log("c *= 2 ->", c); // 44
c /= 2; console.log("c /= 2 ->", c); // 22
c %= 7; console.log("c %= 7 ->", c); // 1
c **= 3; console.log("c **= 3 ->", c); // 1

// Operadores de Comparação
console.log(`Igualdade (10 == "10"):`, 10 == "10"); // true
console.log(`Estritamente igual (10 === "10"):`, 10 === "10"); // false
console.log(`Diferente (10 != "10"):`, 10 != "10"); // false
console.log(`Estritamente diferente (10 !== "10"):`, 10 !== "10"); // true
console.log(`Maior que (10 > 4):`, 10 > 4); // true
console.log(`Menor que (10 < 4):`, 10 < 4); // false
console.log(`Maior ou igual (10 >= 10):`, 10 >= 10); // true
console.log(`Menor ou igual (10 <= 9):`, 10 <= 9); // false

// Operadores Lógicos
let x = true, y = false;
console.log(`AND (true && false):`, x && y); // false
console.log(`OR (true || false):`, x || y); // true
console.log(`NOT (!true):`, !x); // false

// Operador Spread
const numeros = [5, 10, 15];
const maisNumeros = [...numeros, 20, 25, 30];
console.log("Array original:", numeros);
console.log("Array expandido:", maisNumeros);

const pessoa = { nome: "Carlos", idade: 35 };
const novaPessoa = { ...pessoa, cidade: "São Paulo" };
console.log("Objeto original:", pessoa);
console.log("Objeto expandido:", novaPessoa);

// Operador Rest
function somarTudo(...numeros) {
  const resultado = numeros.reduce((total, num) => total + num, 0);
  console.log(`Soma total: ${numeros.join(" + ")} =`, resultado);
}
somarTudo(5, 10, 15, 20, 25);

const usuario = { nome: "Ana", idade: 28, cidade: "Belo Horizonte", profissao: "Engenheira" };
const { nome, ...resto } = usuario;
console.log("Nome extraído:", nome);
console.log("Restante do objeto:", resto);
