// Criando um array de frutas
const frutas = ['maçã', 'banana', 'laranja', 'manga'];

// Acessando elementos do array
console.log(frutas[0]); // 'maçã'
console.log(frutas[2]); // 'laranja'

// Modificando um elemento
frutas[1] = 'morango';
console.log(frutas); // ['maçã', 'morango', 'laranja', 'manga']

// Adicionando elementos ao final
frutas.push('abacaxi');
console.log(frutas); // ['maçã', 'morango', 'laranja', 'manga', 'abacaxi']

// Removendo o último elemento
const ultimaFruta = frutas.pop();
console.log(ultimaFruta); // 'abacaxi'
console.log(frutas); // ['maçã', 'morango', 'laranja', 'manga']

// Adicionando elementos ao início
frutas.unshift('kiwi');
console.log(frutas); // ['kiwi', 'maçã', 'morango', 'laranja', 'manga']

// Removendo o primeiro elemento
const primeiraFruta = frutas.shift();
console.log(primeiraFruta); // 'kiwi'
console.log(frutas); // ['maçã', 'morango', 'laranja', 'manga']

// Encontrando o índice de um elemento
const indice = frutas.indexOf('laranja');
console.log(indice); // 2

// Verificando se um elemento existe no array
const existe = frutas.includes('banana');
console.log(existe); // false

// Iterando sobre o array com forEach
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`);
});
// Saída:
// 0: maçã
// 1: morango
// 2: laranja
// 3: manga

// Criando um novo array com map
const frutasEmMaiusculo = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEmMaiusculo); // ['MAÇÃ', 'MORANGO', 'LARANJA', 'MANGA']

// Filtrando elementos com filter
const frutasComM = frutas.filter(fruta => fruta.startsWith('m'));
console.log(frutasComM); // ['morango', 'manga']

// Reduzindo o array com reduce
const comprimentoTotal = frutas.reduce((total, fruta) => total + fruta.length, 0);
console.log(comprimentoTotal); // 20

// Verificando se todos os elementos atendem a uma condição com every
const todosComecamComM = frutas.every(fruta => fruta.startsWith('m'));
console.log(todosComecamComM); // false

// Verificando se algum elemento atende a uma condição com some
const algumComecaComM = frutas.some(fruta => fruta.startsWith('m'));
console.log(algumComecaComM); // true

// Ordenando o array
const frutasOrdenadas = frutas.slice().sort();
console.log(frutasOrdenadas); // ['laranja', 'maçã', 'manga', 'morango']

// Invertendo o array
const frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas); // ['manga', 'morango', 'laranja', 'maçã']
