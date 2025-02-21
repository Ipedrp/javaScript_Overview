// Exemplo 1: Criando um Objeto com Prototype

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando!`);
  };
  
  const pessoa1 = new Pessoa('João', 30);
  pessoa1.falar(); // João está falando!
  
  // Exemplo 2: Herança através de Prototype
  
  function Animal(nome) {
    this.nome = nome;
  }
  
  Animal.prototype.falar = function() {
    console.log(`${this.nome} faz um som!`);
  };
  
  function Cachorro(nome, raca) {
    Animal.call(this, nome); // Chama o construtor de Animal
    this.raca = raca;
  }
  
  // Herda de Animal
  Cachorro.prototype = Object.create(Animal.prototype);
  Cachorro.prototype.constructor = Cachorro;
  
  // Adicionando um método específico de Cachorro
  Cachorro.prototype.latir = function() {
    console.log(`${this.nome} está latindo!`);
  };
  
  const cachorro1 = new Cachorro('Rex', 'Pastor Alemão');
  cachorro1.falar(); // Rex faz um som!
  cachorro1.latir(); // Rex está latindo!
  
  // Exemplo 3: Modificando o Prototype
  
  function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  
  Carro.prototype.descrever = function() {
    console.log(`Este é um ${this.marca} ${this.modelo}.`);
  };
  
  const carro1 = new Carro('Toyota', 'Corolla');
  carro1.descrever(); // Este é um Toyota Corolla.
  
  // Modificando o prototype
  Carro.prototype.descrever = function() {
    console.log(`Este carro é um modelo ${this.modelo} da marca ${this.marca}.`);
  };
  
  carro1.descrever(); // Este carro é um modelo Corolla da marca Toyota.
  
  // Exemplo 4: Verificando o Prototype de um Objeto
  
  function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  
  const livro1 = new Livro('1984', 'George Orwell');
  
  console.log(livro1.__proto__ === Livro.prototype); // true
  console.log(livro1.__proto__.constructor === Livro); // true
  