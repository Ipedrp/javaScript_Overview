// Exemplo 1: Callback simples
function saudacao(nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}

function despedida() {
    console.log('Até logo!');
}

saudacao('João', despedida);

// Exemplo 2: Callback em operação assíncrona com setTimeout
console.log('Início');

setTimeout(() => {
    console.log('Tarefa assíncrona concluída!');
}, 2000);

console.log('Fim');

// Exemplo 3: Callback com manipulação de arrays
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map((num) => num * num);

console.log('Quadrados:', quadrados);

// Exemplo 4: Callback com erro
function divisao(a, b, callback) {
    if (b === 0) {
        callback('Erro: Divisão por zero!', null);
    } else {
        callback(null, a / b);
    }
}

divisao(10, 2, (erro, resultado) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Resultado da divisão:', resultado);
    }
});

divisao(10, 0, (erro, resultado) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Resultado da divisão:', resultado);
    }
});

// Exemplo 5: Encadeamento de callbacks (callback hell)
function primeiraTarefa(callback) {
    console.log('Primeira tarefa concluída');
    callback();
}

function segundaTarefa(callback) {
    console.log('Segunda tarefa concluída');
    callback();
}

function terceiraTarefa() {
    console.log('Terceira tarefa concluída');
}

primeiraTarefa(() => {
    segundaTarefa(() => {
        terceiraTarefa();
    });
});