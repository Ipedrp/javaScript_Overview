// arquivo: pessoa.js

export class Pessoa {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  
    obterInformacoes() {
      return `${this.nome}, ${this.idade} anos, Email: ${this.email}`;
    }
  }
  