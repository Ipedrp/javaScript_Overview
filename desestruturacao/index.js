// Desestruturação de Objetos

// Exemplo 1: Desestruturação Básica
const pessoa1 = {
    nomeCompleto: 'João Silva',
    idadeAtual: 30,
    emailUsuario: 'joao.silva@example.com'
  };
  
  const { nomeCompleto: nome1, idadeAtual: idade1, emailUsuario: email1 } = pessoa1;
  console.log(nome1);   // João Silva
  console.log(idade1);  // 30
  console.log(email1);  // joao.silva@example.com
  
  // Exemplo 2: Atribuindo Nomes Diferentes
  const pessoa2 = {
    nomeCompleto: 'Maria Oliveira',
    idadeAtual: 25,
    emailUsuario: 'maria.oliveira@example.com'
  };
  
  const { nomeCompleto: nome2, idadeAtual: idade2, emailUsuario: email2 } = pessoa2;
  console.log(nome2);    // Maria Oliveira
  console.log(idade2);   // 25
  console.log(email2);   // maria.oliveira@example.com
  
  // Exemplo 3: Desestruturação com Valor Padrão
  const pessoa3 = {
    nomeCompleto: 'Carlos Almeida',
    idadeAtual: 35
  };
  
  const { nomeCompleto: nome3, idadeAtual: idade3, emailUsuario = 'sem-email@example.com' } = pessoa3;
  console.log(emailUsuario);   // sem-email@example.com
  
  
  // Desestruturação em Funções
  
  function exibirUsuario({ nomeCompleto: nomeExibido, idadeAtual: idadeExibida }) {
    console.log(`Nome: ${nomeExibido}, Idade: ${idadeExibida}`);
  }
  
  const usuario1 = { nomeCompleto: 'Lucas Costa', idadeAtual: 28 };
  exibirUsuario(usuario1);    // Nome: Lucas Costa, Idade: 28
  
  
  // Desestruturação de Arrays
  
  // Exemplo 1: Desestruturação Básica de Arrays
  const listaNumeros1 = [10, 20, 30];
  
  const [num1, num2, num3] = listaNumeros1;
  console.log(num1);  // 10
  console.log(num2);  // 20
  console.log(num3);  // 30
  
  // Exemplo 2: Pulando Elementos no Array
  const listaNumeros2 = [10, 20, 30, 40];
  
  const [primeiro, , terceiro] = listaNumeros2;
  console.log(primeiro);  // 10
  console.log(terceiro);  // 30
  
  // Exemplo 3: Desestruturação com Valor Padrão em Arrays
  const listaNumeros3 = [100, 200];
  
  const [valor1, valor2, valor3 = 300] = listaNumeros3;
  console.log(valor3);  // 300 (valor padrão)
  
  // Desestruturação em Funções
  
  function exibirValoresArray([valorA, valorB, valorC]) {
    console.log(`Valor A: ${valorA}, Valor B: ${valorB}, Valor C: ${valorC}`);
  }
  
  const numeros1 = [1, 2, 3];
  exibirValoresArray(numeros1);  // Valor A: 1, Valor B: 2, Valor C: 3
  
  
  // Desestruturação com Rest (Captura o restante)
  
  // Exemplo 1: Rest em Objetos
  const pessoa4 = {
    nomeCompleto: 'Ana Souza',
    idadeAtual: 28,
    cidadeResidencial: 'São Paulo',
    paisResidencial: 'Brasil'
  };
  
  const { nomeCompleto: nomeP4, ...restoDadosP4 } = pessoa4;
  console.log(nomeP4);              // Ana Souza
  console.log(restoDadosP4);       // { idadeAtual: 28, cidadeResidencial: 'São Paulo', paisResidencial: 'Brasil' }
  
  // Exemplo 2: Rest em Arrays
  const listaNumeros4 = [1, 2, 3, 4, 5];
  
  const [primeiroNumero, ...restoArray] = listaNumeros4;
  console.log(primeiroNumero);     // 1
  console.log(restoArray);         // [2, 3, 4, 5]
  
  // Desestruturação de Objetos e Arrays Aninhados
  
  // Exemplo 1: Objetos Aninhados
  const pessoa5 = {
    nomeCompleto: 'Roberto Martins',
    endereco: {
      ruaEndereco: 'Rua das Palmeiras',
      cidadeEndereco: 'Rio de Janeiro',
      cep: '12345-678'
    }
  };
  
  const { nomeCompleto: nomeP5, endereco: { ruaEndereco, cidadeEndereco } } = pessoa5;
  console.log(nomeP5);              // Roberto Martins
  console.log(ruaEndereco);         // Rua das Palmeiras
  console.log(cidadeEndereco);      // Rio de Janeiro
  
  // Exemplo 2: Arrays Aninhados
  const listaNumeros5 = [10, [20, 30], 40];
  
  const [numInicial, [numIntermediario1, numIntermediario2], numFinal] = listaNumeros5;
  console.log(numInicial);          // 10
  console.log(numIntermediario1);   // 20
  console.log(numIntermediario2);   // 30
  console.log(numFinal);            // 40
  
  
  // Desestruturação com Rest e Spread
  
  // Exemplo 1: Rest em Objetos
  const pessoa6 = {
    nomeCompleto: 'Paula Rodrigues',
    idadeAtual: 32,
    profissaoUsuario: 'Designer',
    cidadeResidencial: 'Belo Horizonte'
  };
  
  const { nomeCompleto: nomeP6, ...outrosDadosPessoa6 } = pessoa6;
  console.log(nomeP6);               // Paula Rodrigues
  console.log(outrosDadosPessoa6);   // { idadeAtual: 32, profissaoUsuario: 'Designer', cidadeResidencial: 'Belo Horizonte' }
  
  // Exemplo 2: Spread em Arrays
  const listaNumeros6 = [100, 200, 300];
  const novaListaNumeros = [...listaNumeros6, 400, 500];
  console.log(novaListaNumeros);     // [100, 200, 300, 400, 500]
  