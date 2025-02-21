// Exemplo 1: Método estático para validação de e-mails
class Validador {
    static validarEmail(email) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(email);
    }
  }
  
  console.log(Validador.validarEmail('teste@exemplo.com')); // true
  console.log(Validador.validarEmail('email_invalido')); // false
  
  // Exemplo 2: Propriedade estática para configuração global
  class Config {
    static apiUrl = 'https://api.exemplo.com';
    static timeout = 5000;
  
    static getInfo() {
      return `API: ${this.apiUrl}, Timeout: ${this.timeout}ms`;
    }
  }
  
  console.log(Config.getInfo());
  
  // Exemplo 3: Contador de instâncias com propriedade estática
  class Produto {
    static totalProdutos = 0;
  
    constructor(nome) {
      this.nome = nome;
      Produto.totalProdutos++;
    }
  }
  
  const p1 = new Produto('Teclado');
  const p2 = new Produto('Mouse');
  console.log(Produto.totalProdutos); // 2
  
  // Exemplo 4: Método estático para formatação de dados
  class Formatador {
    static paraMaiusculo(texto) {
      return texto.toUpperCase();
    }
  }
  
  console.log(Formatador.paraMaiusculo('hello world')); // HELLO WORLD
  
  // Exemplo 5: Propriedade estática usada como constante
  class Constantes {
    static PI = 3.14159;
  }
  
  console.log(`Valor de PI: ${Constantes.PI}`);
  