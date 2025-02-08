// Exemplo do for - Imprimindo a tabuada de 1 a 10

console.log("Tabuada de 1 a 10:");

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}

// Exemplo do "for in" com um Array de Objetos

const pessoas = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Ana', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 35, cidade: 'Belo Horizonte' }
];

console.log("Propriedades das pessoas:");

for (let i = 0; i < pessoas.length; i++) {
    console.log(`Pessoa ${i + 1}:`);
    for (let chave in pessoas[i]) {
        console.log(`${chave}: ${pessoas[i][chave]}`);
    }
    console.log('-------------------');
}

// Exemplo do "for of"com um Array onde cada valor é um Array de objetos sobre entretenimento

const categorias = [
    [
        { tipo: 'Televisor', marca: 'Samsung', modelo: 'QLED', tamanho: '55"' },
        { tipo: 'Televisor', marca: 'LG', modelo: 'OLED', tamanho: '65"' }
    ],
    [
        { tipo: 'Filme', nome: 'Inception', ano: 2010, genero: 'Ficção Científica' },
        { tipo: 'Filme', nome: 'Titanic', ano: 1997, genero: 'Romance/Drama' }
    ],
    [
        { tipo: 'Série', nome: 'Stranger Things', ano: 2016, genero: 'Suspense/Fantasia' },
        { tipo: 'Série', nome: 'Breaking Bad', ano: 2008, genero: 'Crime/Drama' }
    ]
];

console.log("Entretenimento nas categorias:");

for (let categoria of categorias) {
    console.log("Categoria:");
    for (let item of categoria) {
        console.log(`${item.tipo}: ${item.nome ? item.nome : item.marca} (${item.ano}) - ${item.genero ? item.genero : item.tamanho}`);
    }
    console.log('-------------------');
}

// Exemplo do "while" - Encontrando o primeiro número par maior que 100

let numero = 101;

console.log("Encontrando o primeiro número par maior que 100:");

while (numero % 2 !== 0) {
    numero++;
}

console.log(`O primeiro número par maior que 100 é: ${numero}`);


// Exemplo do "do while" - Contando até que a soma seja maior que 100

let soma = 0;
let contador = 1;

console.log("Contando até que a soma seja maior que 100:");

do {
    soma += contador;
    contador++;
} while (soma <= 100);

console.log(`A soma dos números até ${contador - 1} é: ${soma}`);
