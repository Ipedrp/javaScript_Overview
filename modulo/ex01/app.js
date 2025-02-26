// arquivo: app.js

import { Pessoa } from './pessoa.js';

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const email = document.getElementById('email').value;
  
  // Criando uma instância da classe Pessoa
  const pessoa = new Pessoa(nome, idade, email);
  
  // Adicionando o cadastro à lista na interface
  const listItem = document.createElement('li');
  listItem.textContent = pessoa.obterInformacoes();
  
  document.getElementById('cadastrosList').appendChild(listItem);

  // Limpar os campos do formulário
  document.getElementById('cadastroForm').reset();
});
