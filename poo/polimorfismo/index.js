// Exemplo 1: Polimorfismo de Sobrescrita (Override) em JavaScript

// Classe base (Pai)
class Animal {
    falar() {
        console.log("O animal faz um som!");
    }
}

// Classe derivada (Filha)
class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late!");
    }
}

// Outra classe derivada (Filha)
class Gato extends Animal {
    falar() {
        console.log("O gato mia!");
    }
}

// Instanciando objetos
const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();

// Polimorfismo - O mesmo método, mas com comportamentos diferentes
animal.falar();   // O animal faz um som!
cachorro.falar(); // O cachorro late!
gato.falar();     // O gato mia!


// Exemplo 2: Polimorfismo com Métodos e Parâmetros Diferentes

class Forma {
    desenhar() {
        console.log("Desenhando uma forma.");
    }
}

class Circulo extends Forma {
    desenhar() {
        console.log("Desenhando um círculo.");
    }
}

class Quadrado extends Forma {
    desenhar() {
        console.log("Desenhando um quadrado.");
    }
}

class Triangulo extends Forma {
    desenhar() {
        console.log("Desenhando um triângulo.");
    }
}

// Polimorfismo - Diferentes formas, mesma interface (método)
const forma1 = new Circulo();
const forma2 = new Quadrado();
const forma3 = new Triangulo();

forma1.desenhar(); // Desenhando um círculo.
forma2.desenhar(); // Desenhando um quadrado.
forma3.desenhar(); // Desenhando um triângulo.


// Exemplo 3: Polimorfismo e Sobrecarga Simulada

class Calculadora {
    calcular(a, b) {
        console.log("Operação padrão");
    }
}

class Soma extends Calculadora {
    calcular(a, b) {
        console.log(`Resultado da soma: ${a + b}`);
    }
}

class Multiplicacao extends Calculadora {
    calcular(a, b) {
        console.log(`Resultado da multiplicação: ${a * b}`);
    }
}

class Divisao extends Calculadora {
    calcular(a, b) {
        if (b === 0) {
            console.log("Erro: Divisão por zero");
        } else {
            console.log(`Resultado da divisão: ${a / b}`);
        }
    }
}

// Usando a classe Calculadora e suas subclasses
const soma = new Soma();
const multiplicacao = new Multiplicacao();
const divisao = new Divisao();

soma.calcular(5, 3);          // Resultado da soma: 8
multiplicacao.calcular(5, 3); // Resultado da multiplicação: 15
divisao.calcular(6, 3);       // Resultado da divisão: 2
divisao.calcular(6, 0);       // Erro: Divisão por zero


// Exemplo 4: Polimorfismo com Diferentes Tipos de Objetos

class Carro {
    constructor(marca) {
        this.marca = marca;
    }

    mostrarMarca() {
        console.log(`Este é um carro da marca ${this.marca}.`);
    }
}

class Moto {
    constructor(marca) {
        this.marca = marca;
    }

    mostrarMarca() {
        console.log(`Esta é uma moto da marca ${this.marca}.`);
    }
}

// Função que aceita qualquer tipo de veículo
function exibirInfo(veiculo) {
    veiculo.mostrarMarca(); // Polimorfismo: A função funciona para diferentes tipos de objetos
}

const carro = new Carro("Toyota");
const moto = new Moto("Honda");

exibirInfo(carro); // Este é um carro da marca Toyota.
exibirInfo(moto);  // Esta é uma moto da marca Honda.
