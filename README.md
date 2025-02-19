- [1. Declaração de Variáveis em JavaScript](#1-declaração-de-variáveis-em-javascript)
  - [1.1. `var`](#11-var)
  - [1.2. `let`](#12-let)
  - [1.3. `const`](#13-const)
  - [1.4. Comparação entre `var`, `let` e `const`](#14-comparação-entre-var-let-e-const)
  - [1.5. Observações](#15-observações)
- [2. Operadores](#2-operadores)
  - [2.1. Operadores Aritméticos](#21-operadores-aritméticos)
  - [2.2. Operadores de Atribuição](#22-operadores-de-atribuição)
  - [2.3. Operadores de Comparação](#23-operadores-de-comparação)
  - [2.4. Operadores Lógicos](#24-operadores-lógicos)
  - [2.5. Operadores de Incremento e Decremento](#25-operadores-de-incremento-e-decremento)
  - [2.6. Operadores Bitwise (Bit a Bit)](#26-operadores-bitwise-bit-a-bit)
  - [2.7. Operadores Ternário e de Coalescência Nula](#27-operadores-ternário-e-de-coalescência-nula)
  - [2.8. Operadores de String](#28-operadores-de-string)
  - [2.9. Operadores de Tipo](#29-operadores-de-tipo)
  - [2.10. Operador Spread (`...`) e Rest (`...`)](#210-operador-spread--e-rest-)
- [3. Estruturas Condicionais](#3-estruturas-condicionais)
  - [3.1. `if`](#31-if)
  - [3.2. `else if`](#32-else-if)
  - [3.3. `else`](#33-else)
  - [3.4. `switch`](#34-switch)
- [4. Estruturas de Repetição (Loops)](#4-estruturas-de-repetição-loops)
  - [4.1. **`for`** - Loop Tradicional](#41-for---loop-tradicional)
  - [4.2. **`for in`** - Loop para Iteração sobre Propriedades de um Objeto](#42-for-in---loop-para-iteração-sobre-propriedades-de-um-objeto)
  - [4.3. **`for of`** - Loop para Iteração sobre Valores de Objetos Iteráveis (como Arrays)](#43-for-of---loop-para-iteração-sobre-valores-de-objetos-iteráveis-como-arrays)
  - [4.4. **`while`** -  Loop com Condição no Início](#44-while----loop-com-condição-no-início)
  - [4.5. **`do while`** -  Loop com Condição no Final](#45-do-while----loop-com-condição-no-final)
  - [4.6. Resumo das Diferenças](#46-resumo-das-diferenças)
  - [4.7. `break` e `continue`](#47-break-e-continue)
- [5. Funções](#5-funções)
  - [5.1. Funções Simples](#51-funções-simples)
  - [5.2. Funções com Retorno](#52-funções-com-retorno)
  - [5.3. Funções Parametrizadas](#53-funções-parametrizadas)
  - [5.4. Funções com Parâmetro Rest](#54-funções-com-parâmetro-rest)
  - [5.5. Funções Anônimas](#55-funções-anônimas)
  - [5.6. Arrow Function](#56-arrow-function)
  - [5.7. Funções Aninhadas](#57-funções-aninhadas)
  - [5.8. Funções Geradoras](#58-funções-geradoras)
  - [5.9. Quando Utilizar Cada Tipo de Função](#59-quando-utilizar-cada-tipo-de-função)
- [6. Métodos](#6-métodos)
  - [6.1. Método `map()`](#61-método-map)
  - [6.2. Método `filter()`](#62-método-filter)
  - [6.3. Método `find()`](#63-método-find)
  - [6.4. Método `every()`](#64-método-every)
  - [6.5. Método `some()`](#65-método-some)
  - [6.6. Método `reduce()`](#66-método-reduce)
- [7. Arrays](#7-arrays)
  - [7.1. Criando Arrays](#71-criando-arrays)
  - [7.2. Acessando Elementos](#72-acessando-elementos)
  - [7.3. Métodos Comuns](#73-métodos-comuns)

# 1. Declaração de Variáveis em JavaScript

- Em JavaScript, existem três formas principais de declarar variáveis:

  - `var` (Forma antiga, com escopo funcional)
  - `let` (Forma moderna, com escopo de bloco)
  - `const` (Para constantes, também com escopo de bloco)

## 1.1. `var`

- A palavra-chave `var` era a principal forma de declarar variáveis antes do ES6. 
- No entanto, ela tem alguns problemas, como o **escopo funcional** e **hoisting** imprevisível.

    ```javascript
    var nome = "João";
    console.log(nome); // João
    ```

- Características do `var`:
  - Pode ser redeclarada no mesmo escopo.
  - Possui **escopo de função** (não de bloco).
  - Sofre **hoisting**, ou seja, é movida para o topo do escopo antes da execução.

    ```javascript
    console.log(idade); // undefined (hoisting)
    var idade = 30;
    ```

## 1.2. `let`

- A partir do ES6, `let` foi introduzido para solucionar problemas do `var`. 
- Ele tem **escopo de bloco**, evitando conflitos de variáveis.

    ```javascript
    let cidade = "São Paulo";
    console.log(cidade); // São Paulo
    ```

- Características do `let`:
  - **Não pode** ser redeclarado no mesmo escopo.
  - Possui **escopo de bloco**.
  - Sofre **hoisting**, mas **não é inicializado** automaticamente.

    ```javascript
    console.log(carro); // ReferenceError
    let carro = "Fusca";
    ```

## 1.3. `const`

- A palavra-chave `const` é usada para definir **constantes**, ou seja, valores que não podem ser alterados após a atribuição.

    ```javascript
    const PI = 3.14159;
    console.log(PI);
    ```

- Características do `const`:
  - **Deve ser inicializado na declaração**.
  - **Não pode ser reatribuído**.
  - Possui **escopo de bloco**.

    ```javascript
    const cor = "Azul";
    cor = "Vermelho"; // TypeError: Assignment to constant variable.
    ```

## 1.4. Comparação entre `var`, `let` e `const`

| Característica               | `var`                            | `let`                   | `const`                 |
| ---------------------------- | -------------------------------- | ----------------------- | ----------------------- |
| Escopo                       | Função                           | Bloco                   | Bloco                   |
| Hoisting                     | Sim, inicializa como `undefined` | Sim, mas não inicializa | Sim, mas não inicializa |
| Redeclaração no mesmo escopo | Sim                              | Não                     | Não                     |
| Reatribuição                 | Sim                              | Sim                     | Não                     |

## 1.5. Observações 

- **Evite usar `var`** devido a seus problemas de escopo e hoisting.
- Use **`let`** quando precisar de variáveis mutáveis.
- Use **`const`** sempre que possível para evitar alterações acidentais.

# 2. Operadores 

- O JavaScript possui diversos operadores, que podem ser categorizados da seguinte maneira:

## 2.1. Operadores Aritméticos

- Usados para realizar operações matemáticas básicas, como:   
  - soma 
  - subtração
  - multiplicação
  - divisão

| Operador | Descrição                 | Exemplo (`a = 5, b = 2`) | Resultado |
| -------- | ------------------------- | ------------------------ | --------- |
| `+`      | Adição                    | `a + b`                  | `7`       |
| `-`      | Subtração                 | `a - b`                  | `3`       |
| `*`      | Multiplicação             | `a * b`                  | `10`      |
| `/`      | Divisão                   | `a / b`                  | `2.5`     |
| `%`      | Módulo (resto da divisão) | `a % b`                  | `1`       |
| `**`     | Exponenciação             | `a ** b`                 | `25`      |

## 2.2. Operadores de Atribuição

- Usados para atribuir valores a variáveis de forma simples ou combinada com operações matemáticas.

| Operador | Descrição                  | Exemplo (`a = 5`) | Equivalente a |
| -------- | -------------------------- | ----------------- | ------------- |
| `=`      | Atribuição simples         | `a = b`           | `a = b`       |
| `+=`     | Adição e atribuição        | `a += 3`          | `a = a + 3`   |
| `-=`     | Subtração e atribuição     | `a -= 2`          | `a = a - 2`   |
| `*=`     | Multiplicação e atribuição | `a *= 4`          | `a = a * 4`   |
| `/=`     | Divisão e atribuição       | `a /= 2`          | `a = a / 2`   |
| `%=`     | Módulo e atribuição        | `a %= 2`          | `a = a % 2`   |
| `**=`    | Exponenciação e atribuição | `a **= 3`         | `a = a ** 3`  |

## 2.3. Operadores de Comparação

- Usados para comparar dois valores e retornam um resultado booleano (`true` ou `false`).

| Operador | Descrição                 | Exemplo (`a = 5, b = "5"`) | Resultado |
| -------- | ------------------------- | -------------------------- | --------- |
| `==`     | Igualdade de valor        | `a == b`                   | `true`    |
| `===`    | Igualdade de valor e tipo | `a === b`                  | `false`   |
| `!=`     | Diferença de valor        | `a != b`                   | `false`   |
| `!==`    | Diferença de valor e tipo | `a !== b`                  | `true`    |
| `>`      | Maior que                 | `a > 3`                    | `true`    |
| `<`      | Menor que                 | `a < 3`                    | `false`   |
| `>=`     | Maior ou igual a          | `a >= 5`                   | `true`    |
| `<=`     | Menor ou igual a          | `a <= 4`                   | `false`   |

## 2.4. Operadores Lógicos

- Usados para combinar expressões booleanas e retornam valores `true` ou `false`.

| Operador | Descrição | Exemplo (`a = true, b = false`) | Resultado |
| -------- | --------- | ------------------------------- | --------- |
| `&&`     | AND (E)   | `a && b`                        | `false`   |
| `\|\|`   | OR (OU)   | `a \|\| b`                      | `true`    |
| `!`      | NOT (NÃO) | `!a`                            | `false`   |
## 2.5. Operadores de Incremento e Decremento

- Usados para aumentar ou diminuir valores numéricos de maneira simples.

| Operador | Descrição  | Exemplo (`a = 5`) | Resultado        |
| -------- | ---------- | ----------------- | ---------------- |
| `++`     | Incremento | `a++`             | `5` (depois `6`) |
| `--`     | Decremento | `a--`             | `5` (depois `4`) |

## 2.6. Operadores Bitwise (Bit a Bit)

- Realizam operações diretamente nos bits dos números.

| Operador | Descrição               | Exemplo (`a = 5, b = 1`) | Resultado |
| -------- | ----------------------- | ------------------------ | --------- |
| `&`      | AND bit a bit           | `a & b`                  | `1`       |
| `        | `                       | OR bit a bit             | `a        | b` | `5` |
| `^`      | XOR bit a bit           | `a ^ b`                  | `4`       |
| `~`      | NOT bit a bit           | `~a`                     | `-6`      |
| `<<`     | Deslocamento à esquerda | `a << 1`                 | `10`      |
| `>>`     | Deslocamento à direita  | `a >> 1`                 | `2`       |

## 2.7. Operadores Ternário e de Coalescência Nula

- Ajudam a simplificar expressões condicionais.

| Operador | Descrição         | Exemplo (`a = 10, b = null`) | Resultado  |
| -------- | ----------------- | ---------------------------- | ---------- |
| `? :`    | Operador ternário | `a > 5 ? "Maior" : "Menor"`  | `"Maior"`  |
| `??`     | Coalescência nula | `b ?? "Padrão"`              | `"Padrão"` |

## 2.8. Operadores de String

- Usados para manipular e concatenar textos.

| Operador | Descrição                 | Exemplo (`a = "Olá", b = " Mundo"`) | Resultado     |
| -------- | ------------------------- | ----------------------------------- | ------------- |
| `+`      | Concatenação              | `a + b`                             | `"Olá Mundo"` |
| `+=`     | Concatenação e atribuição | `a += b`                            | `"Olá Mundo"` |

## 2.9. Operadores de Tipo

- Verificam e identificam os tipos de dados.

| Operador     | Descrição                                   | Exemplo (`a = 5, b = "texto"`) | Resultado  |
| ------------ | ------------------------------------------- | ------------------------------ | ---------- |
| `typeof`     | Retorna o tipo da variável                  | `typeof a`                     | `"number"` |
| `instanceof` | Verifica se um objeto pertence a uma classe | `b instanceof String`          | `false`    |


## 2.10. Operador Spread (`...`) e Rest (`...`)

- Utilizados em JavaScript para manipulação de arrays, objetos e funções.

- 📌 **Spread Operator (`...`)**
  - Expande os elementos de arrays ou objetos.

    ```js
    const numeros = [1, 2, 3];
    const maisNumeros = [...numeros, 4, 5, 6];
    console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]
    ```

  - Também pode ser usado para copiar objetos:

    ```js
    const pessoa = { nome: "João", idade: 30 };
    const novaPessoa = { ...pessoa, cidade: "São Paulo" };
    console.log(novaPessoa); // { nome: "João", idade: 30, cidade: "São Paulo" }
    ```

- 📌**Rest Operator (`...`)**
  - Coleta os elementos restantes.

    ```js
    function somarTudo(...numeros) {
      return numeros.reduce((total, num) => total + num, 0);
    }
    console.log(somarTudo(1, 2, 3, 4, 5)); // 15
    ```

  - Também pode ser usado em destruturação de objetos:

    ```js
    const usuario = { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" };
    const { nome, ...resto } = usuario;
    console.log(nome); // "Maria"
    console.log(resto); // { idade: 25, cidade: "Rio de Janeiro" }
    ```
# 3. Estruturas Condicionais 

- As estruturas condicionais `if`, `else if` e `else` são usadas para executar diferentes blocos de código com base em condições específicas.

## 3.1. `if`

- Usada para executar um bloco de código apenas se a condição for verdadeira. 
- Se a condição for falsa, o bloco de código é ignorado.

- **Sintaxe:**

  ```javascript
  if (condição) {
    // Bloco de código que será executado se a condição for verdadeira
  }
  ```

## 3.2. `else if`

- Permite testar múltiplas condições. 
- Se a condição do if for falsa, ele verifica a condição no else if.
- Você pode ter vários else if em um único bloco condicional.

- **Sintaxe:**

  ```javascript
  if (condição1) {
    // Bloco de código se condição1 for verdadeira
  } else if (condição2) {
    // Bloco de código se condição2 for verdadeira
  }
  ```
## 3.3. `else`

- Usada para executar um bloco de código caso todas as condições anteriores (se houver) sejam falsas.
- Sempre vem no final da estrutura condicional.

- **Sintaxe:**

  ```javascript
  if (condição1) {
    // Bloco de código se condição1 for verdadeira
  } else {
    // Bloco de código se todas as condições anteriores forem falsas
  }
  ```

## 3.4. `switch` 

- Usada para executar um bloco de código com base no valor de uma expressão. 
- Ao contrário do `if...else if`, o `switch` é mais adequado quando você tem várias opções para verificar.
- Torna o código mais limpo e legível.

- **Sintaxe:**

  ```javascript
  switch (expressão) {
    case valor1:
      // Bloco de código se a expressão for igual a valor1
      break;
    case valor2:
      // Bloco de código se a expressão for igual a valor2
      break;
    default:
      // Bloco de código se nenhum valor coincidir
  }
  ```
  - **expressão:** A expressão que será comparada com os valores dos case.
  
  - **case valor:** Cada case representa um valor que será comparado com a expressão.
  
  - **break:** O break é usado para interromper a execução do switch. Se não for usado, o código continuará a ser executado nos casos seguintes.
  
  - **default:** O bloco default é opcional e é executado se nenhum dos valores dos case coincidir com a expressão.

# 4. Estruturas de Repetição (Loops) 

## 4.1. **`for`** - Loop Tradicional

- Estrutura de repetição mais comum em JavaScript. 
- Usado quando você sabe o número de vezes que deseja executar um bloco de código. 
- **Sintaxe:**

  ```javascript
  for (inicialização; condição; incremento) {
      // bloco de código
  }
  ```

  - **Inicialização:** A variável de controle é criada (neste exemplo, let i = 0).
  - **Condição:** O loop continuará enquanto essa condição for verdadeira (i < 5).
  - **Incremento:** Após cada iteração, a variável de controle será atualizada (aqui, i++).
  
- **Exemplo de Uso:**

  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i); // Imprime os números de 0 a 4
  }
  ```
## 4.2. **`for in`** - Loop para Iteração sobre Propriedades de um Objeto

- Usado para percorrer as propriedades de um objeto ou os índices de um array.
 
- **Sintaxe:**

  ```javascript
  for (let chave in objeto) {
      // bloco de código
  }
  ```

  
- **Exemplo de Uso:**

  ```javascript
  const pessoa = {
      nome: 'João',
      idade: 25,
      cidade: 'São Paulo'
  };

  for (let chave in pessoa) {
      console.log(chave + ': ' + pessoa[chave]);
      //Imprime
      //nome: João
      //idade: 25
      //cidade: São Paulo
  }

  ```
- **Observação:**
  - Percorre as propriedades enumeráveis de um objeto, incluindo as herdadas da cadeia de protótipos.
  
## 4.3. **`for of`** - Loop para Iteração sobre Valores de Objetos Iteráveis (como Arrays)
- Usado para iterar sobre objetos que são iteráveis, como arrays, strings e outros objetos que implementam o protocolo de iteração.
 
- **Sintaxe:**

  ```javascript
  for (let valor of iteravel) {
      // bloco de código
  }
  ```
  
- **Exemplo de Uso:**

  ```javascript
  const frutas = ['maçã', 'banana', 'laranja'];

  for (let fruta of frutas) {
      console.log(fruta); // Imprime 'maçã', 'banana', 'laranja'
  }
  ```
- **Observação:**
  - Percorre os valores de objetos iteráveis, como arrays ou strings, mas não acessa os índices.
  
## 4.4. **`while`** -  Loop com Condição no Início
- Continua executando enquanto a condição for verdadeira. Ele é mais utilizado quando não se sabe o número exato de iterações, mas tem uma condição para parar.
 
- **Sintaxe:**

  ```javascript
  while (condição) {
      // bloco de código
  }
  ```
  
- **Exemplo de Uso:**

  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(i); // Imprime 0, 1, 2, 3, 4
      i++;
  }
  ```
- **Observação:**
  - Se a condição for falsa desde o início, o bloco de código não será executado.
  
## 4.5. **`do while`** -  Loop com Condição no Final
-  Semelhante ao while, mas a principal diferença é que o bloco de código será executado pelo menos uma vez, já que a condição é verificada após a execução do código.
 
- **Sintaxe:**

  ```javascript
  do {
      // bloco de código
  } while (condição);

  ```
  
- **Exemplo de Uso:**

  ```javascript
  let i = 0;
  do {
      console.log(i); // Imprime 0, 1, 2, 3, 4
      i++;
  } while (i < 5);
  ```
- **Observação:**
  - Mesmo que a condição seja falsa desde o início, o código dentro do do será executado pelo menos uma vez.

## 4.6. Resumo das Diferenças

| Tipo de Loop   | Onde é mais útil                                                           | Condição de execução                                | Exemplo de uso                                                                 |
| -------------- | -------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| **`for`**      | Quando você sabe o número de iterações                                     | A condição é verificada no início                   | Iterar sobre um intervalo de números.                                          |
| **`for in`**   | Para iterar sobre as propriedades de um objeto ou índices de array         | Itera sobre chaves (ou índices) de objetos e arrays | Iterar sobre as propriedades de um objeto.                                     |
| **`for of`**   | Para iterar sobre valores de um array ou objeto iterável                   | Itera sobre os valores diretamente                  | Iterar sobre elementos de um array ou string.                                  |
| **`while`**    | Quando não se sabe o número exato de iterações e a condição é verificável  | A condição é verificada antes da execução           | Repetir enquanto uma condição for verdadeira.                                  |
| **`do while`** | Quando você deseja garantir que o código será executado pelo menos uma vez | A condição é verificada após a execução             | Repetir a execução pelo menos uma vez, mesmo que a condição não seja atendida. |


## 4.7. `break` e `continue`

- **`break`** - Interrompe a Execução de um Loop

  - Usada para **interromper** imediatamente a execução de um loop (`for`, `while`, `do while`, ou `switch`), mesmo que a condição do loop não tenha sido atendida.

    - **Sintaxe:**
      ```javascript
      break;
      ```
    - **Exemplo de Uso:**
      ```javascript
      // Exemplo de break em um loop for

      for (let i = 0; i < 10; i++) {
          if (i === 5) {
              break;  // Interrompe o loop quando i for igual a 5
          }
          console.log(i);
      }

      //Imprime:
      //0
      //1
      //2
      //3
      //4
      ```
- **`continue`** - Pula para a Próxima Iteração do Loop

  - Usada para **pular** a iteração atual de um loop e continuar para a próxima iteração, sem executar o restante do código após ela

    - **Sintaxe:**
      ```javascript
      continue;
      ```
    - **Exemplo de Uso:**
      ```javascript
      // Exemplo de continue em um loop for

      for (let i = 0; i < 10; i++) {
          if (i === 5) {
              continue;  // Pula o número 5 e continua o loop
          }
          console.log(i);
      }

      //Imprime:
      //0
      //1
      //2
      //3
      //4
      //6
      //7
      //8
      //9
      ```
- Diferença entre **`break`** e **`continue`**


  | Instrução      | O que faz                                | Quando usar                                                           |
  | -------------- | ---------------------------------------- | --------------------------------------------------------------------- |
  | **`break`**    | Interrompe completamente o loop.         | Quando você quer sair do loop antes de ele terminar.                  |
  | **`continue`** | Pula a iteração atual e continua o loop. | Quando você quer pular uma iteração específica, mas continuar o loop. |


# 5. Funções 

- São blocos de código reutilizáveis que podem ser chamados e executados em diferentes partes de um programa. 
- São objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

## 5.1. Funções Simples

- É definida usando a palavra-chave `function`, seguida pelo nome da função e um bloco de código a ser executado.

- **Sintaxe:**
  ```javascript
  function saudacao() {
      console.log("Olá, mundo!");
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  saudacao(); // Saída: Olá, mundo!
  ```

## 5.2. Funções com Retorno

- Funções podem retornar valores utilizando a palavra-chave `return`.

- **Sintaxe:**
  ```javascript
  function soma(a, b) {
      return a + b;
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  let resultado = soma(5, 3);
  console.log(resultado); // Saída: 8
  ```

## 5.3. Funções Parametrizadas

- As funções podem aceitar parâmetros para tornar seu comportamento mais dinâmico.

- **Sintaxe:**
  ```javascript
  function saudacao(nome) {
      console.log("Olá, " + nome + "!");
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  saudacao("Maria"); // Saída: Olá, Maria!
  ```

## 5.4. Funções com Parâmetro Rest

- O parâmetro `rest` permite representar um número indefinido de argumentos como um array.

- **Sintaxe:**
  ```javascript
  function somarTodos(...numeros) {
      return numeros.reduce((total, num) => total + num, 0);
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  console.log(somarTodos(1, 2, 3, 4, 5)); // Saída: 15
  ```

## 5.5. Funções Anônimas

- Aquelas que não possuem um nome e são geralmente atribuídas a variáveis.

- **Sintaxe:****
  ```javascript
  const multiplicar = function(a, b) {
      return a * b;
  };
  ```

- **Exemplo de Uso:**
  ```javascript
  console.log(multiplicar(4, 5)); // Saída: 20
  ```

## 5.6. Arrow Function

- São uma sintaxe mais curta para definir funções em JavaScript.

- **Sintaxe:**
  ```javascript
  const dividir = (a, b) => a / b;
  ```

- **Exemplo de Uso:**
  ```javascript
  console.log(dividir(10, 2)); // Saída: 5
  ```

## 5.7. Funções Aninhadas

- Funções podem ser definidas dentro de outras funções, o que permite encapsulamento e reutilização de código.

- **Sintaxe:**
  ```javascript
  function externa() {
      function interna() {
          console.log("Função interna executada!");
      }
      interna();
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  externa(); // Saída: Função interna executada!
  ```

## 5.8. Funções Geradoras

- Funções geradoras são declaradas com `function*` e podem produzir múltiplos valores ao longo do tempo usando `yield`.

- **Sintaxe:**
  ```javascript
  function* gerador() {
      yield 1;
      yield 2;
      yield 3;
  }
  ```

- **Exemplo de Uso:**
  ```javascript
  const g = gerador();
  console.log(g.next().value); // Saída: 1
  console.log(g.next().value); // Saída: 2
  console.log(g.next().value); // Saída: 3
  ```
## 5.9. Quando Utilizar Cada Tipo de Função

| Tipo de Função             | Quando Utilizar                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Funções Simples            | Quando um bloco de código precisa ser reutilizado várias vezes sem necessidade de parâmetros.              |
| Funções com Retorno        | Quando um valor precisa ser calculado e reutilizado posteriormente no código.                              |
| Funções Parametrizadas     | Quando a função precisa ser flexível e aceitar diferentes valores de entrada.                              |
| Funções com Parâmetro Rest | Quando não se sabe previamente quantos argumentos serão passados para a função.                            |
| Funções Anônimas           | Quando a função será usada temporariamente ou atribuída a uma variável.                                    |
| Arrow Function             | Quando se deseja uma sintaxe mais curta e clara para funções simples.                                      |
| Funções Aninhadas          | Quando uma função precisa ser utilizada apenas dentro de outra função, melhorando a organização do código. |
| Funções Geradoras          | Quando é necessário produzir uma sequência de valores sob demanda, evitando cálculos desnecessários.       |

# 6. Métodos

## 6.1. Método `map()`

- É uma função de array em JavaScript que cria um novo array ao aplicar uma função a cada elemento do array original. 
- É amplamente utilizado para transformar dados de forma eficiente e imutável.

- **Sintaxe:**
  ```javascript
  const novoArray = arrayOriginal.map((elemento, indice, array) => {
    return elementoModificado;
  });
  ```
  - **elemento** → O valor atual do array.

  - **indice** (opcional) → A posição do elemento no array.

  - **array** (opcional) → O array original.

- **Exemplo de Uso:**
  ```javascript
  const numeros = [1, 2, 3, 4, 5];
  const dobrados = numeros.map(num => num * 2);

  console.log(dobrados); // [2, 4, 6, 8, 10]
  ```
- **Quando Usar ?**

  - Transformar um array sem modificar o original.

  - Um novo array com os dados processados.



## 6.2. Método `filter()`

- É uma função de array em JavaScript que cria um novo array contendo apenas os elementos que passam em um determinado teste (função de callback). 
- Utilizado para filtrar dados sem modificar o array original.

- **Sintaxe:**
  ```javascript
  const novoArray = arrayOriginal.filter((elemento, indice, array) => {
      return condicao;
  });
  ```
  - **elemento** → O valor atual do array.

  - **indice** (opcional) → A posição do elemento no array.

  - **array** (opcional) → O array original.

- **Exemplo de Uso:**
  ```javascript
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = numeros.filter(num => num % 2 === 0);

  console.log(pares); // [2, 4, 6, 8, 10]
  ```

- **Quando Usar ?**

  - Remover elementos que não atendem a um critério.

  - Criar uma nova lista baseada em um conjunto de regras.

## 6.3. Método `find()` 

- Utilizado para retornar o **primeiro elemento** de um array que satisfaz a condição definida em uma função de teste. 
- Caso não encontre nenhum elemento que satisfaça a condição, ele retorna `undefined`.

- **Sintaxe:**
  ```javascript
  const novoArray = arrayOriginal.filter((elemento, indice, array) => {
      return condicao;
  });
  ```
  - **callback** → Função que será executada em cada elemento do array. Ela recebe três parâmetros:

  - **elemento** → O valor atual do array.

  - **indice** (opcional) → A posição do elemento no array.

  - **array** (opcional) → O array original.

  - **thisArg** (opcional) → Valor a ser utilizado como this durante a execução da função de callback.


- **Exemplo de Uso:**
  ```javascript
  const numbers = [5, 12, 8, 130, 44];

  const result = numbers.find(num => num > 10);
  console.log(result); // 12

  ```
- **Características**

  - Retorna apenas o primeiro elemento que satisfaz a condição. Se houver mais de um elemento que atenda à condição, os demais são ignorados.
  - Não modifica o array original.
  - É mais eficiente do que usar `filter()` quando você só precisa do primeiro elemento que satisfaça a condição.

- **Comparação com o filter()**

  - `find()` retorna o primeiro elemento que corresponde à condição.
  - `filter()` retorna um novo array com todos os elementos que atendem à condição.
  - **Exemplo de Uso:**

    ```javascript

    const numbers = [5, 12, 8, 130, 44];

    const result = numbers.find(num => num > 10);
    console.log(result); // 12

    ```


## 6.4. Método `every()` 

- Utilizado para testar **se todos os elementos** de um array atendem a uma condição especificada em uma função de callback. 
- O método retorna `true` se **todos** os elementos do array passarem no teste, e retorna `false` caso **pelo menos um** elemento não passe.

 - **Sintaxe**

    ```javascript
    array.every(callback(element, index, array), thisArg)
    ```

    - **callback** → Função que será executada em cada elemento do array. Ela recebe três parâmetros:

    - **elemento** → O valor atual do array.

    - **indice** (opcional) → A posição do elemento no array.

    - **array** (opcional) → O array sobre o qual o método every() foi chamado.

    - **thisArg** (opcional) → Valor a ser utilizado como this durante a execução da função de callback.


- **Exemplo de Uso:**
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  const allPositive = numbers.every(num => num > 0);
  console.log(allPositive); // true

  ```
- **Características**

  - Percorre todo o array e retorna `false` assim que encontra o primeiro elemento que não atende à condição.
  - Não modifica o array original.
  - Se o array estiver vazio, o método retorna `true`, pois não há elementos para falharem na condição

- **Comparação com o `some()`**

  - `every()` verifica se todos os elementos atendem à condição.
  - `some()` verifica se ao menos um elemento atende à condição.
  - **Exemplo de Uso:**

    ```javascript

    const numbers3 = [1, 2, 3, 4, 5];

    // Usando every
    const allPositive3 = numbers3.every(num => num > 0);
    console.log(allPositive3); // true

    // Usando some
    const anyNegative = numbers3.some(num => num < 0);
    console.log(anyNegative); // false

    ```
## 6.5. Método `some()`

- Utilizado para testar **se pelo menos um elemento** de um array atende a uma condição especificada em uma função de callback. 
- Retorna `true` se **pelo menos um** elemento do array passar no teste, e retorna `false` se **nenhum** elemento passar.

- **Sintaxe**

  ```javascript
  array.some(callback(element, index, array), thisArg)
  ```

  - **callback** → Função que será executada em cada elemento do array. Ela recebe três parâmetros:

  - **elemento** → O valor atual do array.

  - **indice** (opcional) → A posição do elemento no array.

  - **array** (opcional) → : O array sobre o qual o método some() foi chamado.

  - **thisArg** (opcional) → Valor a ser utilizado como this durante a execução da função de callback.

- **Exemplo de Uso:**
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  const allPositive = numbers.every(num => num > 0);
  console.log(allPositive); // true

  ```
- **Características**

  - Percorre odo o array e retorna `true` assim que encontra o primeiro elemento que satisfaz a condição. Se não encontrar nenhum, retorna `false`.
  - Não modifica o array original.
  - Se o array estiver vazio, o método retorna false, pois não há elementos para satisfazer a condição.

- **Comparação com o `every()`**

  - `some()` verifica se todos os elementos atendem à condição.
  - `every()` verifica se ao menos um elemento atende à condição.
  - **Exemplo de Uso:**

    ```javascript

    const numbers3 = [1, 2, 3, 4, 5];

    // Usando some
    const anyGreaterThanThree = numbers3.some(num => num > 3);
    console.log(anyGreaterThanThree); // true

    // Usando every
    const allGreaterThanThree = numbers3.every(num => num > 3);
    console.log(allGreaterThanThree); // false


    ```
## 6.6. Método `reduce()`

- Utilizado para reduzir um array a um único valor. 
- Executa uma função de callback para cada elemento do array, acumulando os resultados em um único valor final. 
- Esse valor pode ser um número, string, objeto ou qualquer outro tipo de dado.

- **Sintaxe**

  ```javascript
  array.reduce(callback(acumulador, elementoAtual, índice, array), valorInicial)
  ```
  - **callback** → Função que será executada em cada elemento do array. Ela recebe quatro parâmetros:

  - **acumulador** → O valor retornado na última execução do callback (ou o valorInicial na primeira execução).

  - **elementoAtual** → O elemento do array que está sendo processado.

  - **índice** (opcional) → :  O índice do elemento atual.
  
  - **array** (opcional) → O array sobre o qual reduce() foi chamado.

- **Exemplo de Uso:**
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 15

  ```
- **Características**

  - Pode ser usado para somar valores, contar elementos, manipular arrays e agrupar dados.

  - O valor inicial do acumulador é importante para evitar erros.
  - Se nenhum valor inicial for fornecido, o primeiro elemento do array será usado como acumulador.


# 7. Arrays 

- É uma estrutura de dados que permite armazenar múltiplos valores sob uma única variável. 
- são úteis para organizar dados relacionados e realizar operações em conjuntos de elementos.

## 7.1. Criando Arrays

- Existem várias maneiras de criar arrays em JavaScript:

- **Exemplo de Uso:**

  ```javascript
  // Usando colchetes
  const frutas = ['maçã', 'banana', 'laranja'];

  // Usando o construtor Array
  const numeros = new Array(1, 2, 3, 4, 5);

  // Usando o construtor Array com tamanho
  const vazio = new Array(5); // Cria um array com 5 elementos vazios
  ```
## 7.2. Acessando Elementos

- Os elementos de um array são acessados por seus índices, que começam em 0:

- **Exemplo de Uso:**

  ```javascript
  const frutas = ['maçã', 'banana', 'laranja'];

  console.log(frutas[0]); // 'maçã'
  console.log(frutas[1]); // 'banana'
  console.log(frutas[2]); // 'laranja'

  ```

## 7.3. Métodos Comuns

- JavaScript fornece diversos métodos para manipulação de arrays.
- Aqui estão alguns dos mais utilizados:
  - `push()`
  - `pop()`
  - `shift()`
  - `unshift()`
  - `sort()`

- **`push()`**

  - Adiciona um ou mais elementos ao final de um array:
  - **Exemplo de Uso:**
    ```javascript
    const frutas = ['maçã', 'banana'];
    frutas.push('laranja');
    console.log(frutas); // ['maçã', 'banana', 'laranja']
    ```

- **`pop()`**

  - Remove o último elemento de um array:
  - **Exemplo de Uso:**
    ```javascript
    const frutas = ['maçã', 'banana', 'laranja'];
    const ultimaFruta = frutas.pop();
    console.log(ultimaFruta); // 'laranja'
    console.log(frutas); // ['maçã', 'banana']
    ```
  
- **`shift()`**

  - Remove o primeiro elemento de um array:
  - **Exemplo de Uso:**
    ```javascript
    const frutas = ['maçã', 'banana', 'laranja'];
    const primeiraFruta = frutas.shift();
    console.log(primeiraFruta); // 'maçã'
    console.log(frutas); // ['banana', 'laranja']
    ```

- **`unshift()`**

  - Adiciona um ou mais elementos ao início de um array:
  - **Exemplo de Uso:**
    ```javascript
    const frutas = ['banana', 'laranja'];
    frutas.unshift('maçã');
    console.log(frutas); // ['maçã', 'banana', 'laranja']

    ```

- **`sort()`**

  - Ordena os elementos de um array:
  - **Exemplo de Uso:**
    ```javascript
    const numeros = [5, 3, 8, 1];
    numeros.sort();
    console.log(numeros); // [1, 3, 5, 8]
    ```