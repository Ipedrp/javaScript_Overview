class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.setModelo(modelo); // Chama o método setModelo para inicializar corretamente
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getVelocidade() {
        return this.velocidade;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    setModelo(modelo) {
        this.modelo = modelo;
        
        switch (modelo) {
            case 1:
                this.modelo = 'Normal';
                this.velocidade = '100 km/h';
                break;
            case 2:
                this.modelo = 'Chavoso';
                this.velocidade = '150 km/h';
                break;
            case 3:
                this.modelo = 'Super Chavoso';
                this.velocidade = '250 km/h';
                break;
            case 4:
                this.modelo = 'Mandraka';
                this.velocidade = '400 km/h';
                break;
            default:
                this.modelo = 'Bem antigo';
                this.velocidade = 'Carro quebrado!';
                break;
        }
    }

    info() {
        console.log("Informações sobre o carro");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Velocidade: ${this.velocidade}`);
    }
}

let carro1 = new Carro('Onix', 2);

console.log(carro1.getMarca());
console.log(carro1.getModelo());
console.log(carro1.getVelocidade());

console.log("Com set");

carro1.setMarca('Uno');
carro1.setModelo(4); // Agora o método setModelo atualiza corretamente o modelo e a velocidade

carro1.info();
