// Criação de um objeto literal "carro"
const carro = {
    // Propriedade privada (convenção de underline)
    _marca: "Toyota",
    _modelo: "Corolla",
    _ano: 2020,
    
    // Getter para obter o nome completo do carro
    get descricao() {
      return `${this._marca} ${this._modelo} (${this._ano})`;
    },
  
    // Setter para definir o modelo do carro
    set modelo(novoModelo) {
      if (typeof novoModelo === "string" && novoModelo.trim() !== "") {
        this._modelo = novoModelo;
      } else {
        console.log("Modelo inválido!");
      }
    },
  
    // Setter para definir o ano do carro
    set ano(novoAno) {
      if (Number.isInteger(novoAno) && novoAno > 1885) { // O primeiro carro foi criado em 1886
        this._ano = novoAno;
      } else {
        console.log("Ano inválido!");
      }
    },
  
    // Função para exibir detalhes do carro
    mostrarDetalhes() {
      console.log(`Carro: ${this.descricao}`);
    }
  };
  
  // Utilizando o getter para acessar a descrição do carro
  console.log(carro.descricao); // Saída: Toyota Corolla (2020)
  
  // Usando o setter para atualizar o modelo do carro
  carro.modelo = "Camry"; 
  console.log(carro.descricao); // Saída: Toyota Camry (2020)
  
  // Tentando definir um modelo inválido
  carro.modelo = ""; // Saída: Modelo inválido!
  
  // Usando o setter para atualizar o ano do carro
  carro.ano = 2022; 
  console.log(carro.descricao); // Saída: Toyota Camry (2022)
  
  // Tentando definir um ano inválido
  carro.ano = 1800; // Saída: Ano inválido!
  
  // Chamando a função do objeto
  carro.mostrarDetalhes(); // Saída: Carro: Toyota Camry (2022)
  