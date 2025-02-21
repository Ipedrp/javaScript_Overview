class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoasCadastradas = [];

const form = document.getElementById('pessoaForm');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const listaPessoas = document.getElementById('pessoasCadastradas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    if (nome && idade) {
        const pessoa = new Pessoa(nome, idade);
        pessoasCadastradas.push(pessoa);
        atualizarLista();
        form.reset();
    }
});

function atualizarLista() {
    listaPessoas.innerHTML = '';
    pessoasCadastradas.forEach((pessoa) => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
        listaPessoas.appendChild(li);
    });
}
