function Pessoa(nome, idade) {
    this._nome = nome;
    this._idade = idade;
    
    // Getters e Setters
    this.getNome = function() {
        return this._nome;
    };

    this.setNome = function(nome) {
        this._nome = nome;
    };

    this.getIdade = function() {
        return this._idade;
    };

    this.setIdade = function(idade) {
        this._idade = idade;
    };
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
        li.textContent = `Nome: ${pessoa.getNome()}, Idade: ${pessoa.getIdade()}`;
        listaPessoas.appendChild(li);
    });
}
