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

| Característica | `var` | `let` | `const` |
|--------------|------|------|--------|
| Escopo      | Função | Bloco | Bloco  |
| Hoisting    | Sim, inicializa como `undefined` | Sim, mas não inicializa | Sim, mas não inicializa |
| Redeclaração no mesmo escopo | Sim | Não | Não |
| Reatribuição | Sim | Sim | Não |

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

| Operador | Descrição  | Exemplo (`a = 5, b = 2`) | Resultado |
|----------|-----------|-------------------|-----------|
| `+`  | Adição  | `a + b`  | `7` |
| `-`  | Subtração | `a - b` | `3` |
| `*`  | Multiplicação | `a * b` | `10` |
| `/`  | Divisão  | `a / b` | `2.5` |
| `%`  | Módulo (resto da divisão) | `a % b` | `1` |
| `**` | Exponenciação | `a ** b` | `25` |

## 2.2. Operadores de Atribuição

- Usados para atribuir valores a variáveis de forma simples ou combinada com operações matemáticas.

| Operador | Descrição  | Exemplo (`a = 5`) | Equivalente a |
|----------|-----------|-------------------|---------------|
| `=`  | Atribuição simples  | `a = b` | `a = b` |
| `+=` | Adição e atribuição | `a += 3` | `a = a + 3` |
| `-=` | Subtração e atribuição | `a -= 2` | `a = a - 2` |
| `*=` | Multiplicação e atribuição | `a *= 4` | `a = a * 4` |
| `/=` | Divisão e atribuição | `a /= 2` | `a = a / 2` |
| `%=` | Módulo e atribuição | `a %= 2` | `a = a % 2` |
| `**=` | Exponenciação e atribuição | `a **= 3` | `a = a ** 3` |

## 2.3. Operadores de Comparação

- Usados para comparar dois valores e retornam um resultado booleano (`true` ou `false`).

| Operador | Descrição | Exemplo (`a = 5, b = "5"`) | Resultado |
|----------|-----------|-------------------|-----------|
| `==`  | Igualdade de valor | `a == b` | `true` |
| `===` | Igualdade de valor e tipo | `a === b` | `false` |
| `!=`  | Diferença de valor | `a != b` | `false` |
| `!==` | Diferença de valor e tipo | `a !== b` | `true` |
| `>`   | Maior que | `a > 3` | `true` |
| `<`   | Menor que | `a < 3` | `false` |
| `>=`  | Maior ou igual a | `a >= 5` | `true` |
| `<=`  | Menor ou igual a | `a <= 4` | `false` |

## 2.4. Operadores Lógicos

- Usados para combinar expressões booleanas e retornam valores `true` ou `false`.

| Operador | Descrição | Exemplo (`a = true, b = false`) | Resultado |
|----------|-----------|-------------------|-----------|
| `&&`  | AND (E) | `a && b` | `false` |
| `\|\|` | OR (OU) | `a \|\| b` | `true` |
| `!`   | NOT (NÃO) | `!a` | `false` |
## 2.5. Operadores de Incremento e Decremento

- Usados para aumentar ou diminuir valores numéricos de maneira simples.

| Operador | Descrição  | Exemplo (`a = 5`) | Resultado |
|----------|-----------|-------------------|-----------|
| `++`  | Incremento | `a++` | `5` (depois `6`) |
| `--`  | Decremento | `a--` | `5` (depois `4`) |

## 2.6. Operadores Bitwise (Bit a Bit)

- Realizam operações diretamente nos bits dos números.

| Operador | Descrição | Exemplo (`a = 5, b = 1`) | Resultado |
|----------|-----------|-------------------|-----------|
| `&`  | AND bit a bit | `a & b` | `1` |
| `|`  | OR bit a bit | `a | b` | `5` |
| `^`  | XOR bit a bit | `a ^ b` | `4` |
| `~`  | NOT bit a bit | `~a` | `-6` |
| `<<` | Deslocamento à esquerda | `a << 1` | `10` |
| `>>` | Deslocamento à direita | `a >> 1` | `2` |

## 2.7. Operadores Ternário e de Coalescência Nula

- Ajudam a simplificar expressões condicionais.

| Operador | Descrição | Exemplo (`a = 10, b = null`) | Resultado |
|----------|-----------|-------------------|-----------|
| `? :` | Operador ternário | `a > 5 ? "Maior" : "Menor"` | `"Maior"` |
| `??`  | Coalescência nula | `b ?? "Padrão"` | `"Padrão"` |

## 2.8. Operadores de String

- Usados para manipular e concatenar textos.

| Operador | Descrição | Exemplo (`a = "Olá", b = " Mundo"`) | Resultado |
|----------|-----------|-------------------|-----------|
| `+`  | Concatenação | `a + b` | `"Olá Mundo"` |
| `+=` | Concatenação e atribuição | `a += b` | `"Olá Mundo"` |

## 2.9. Operadores de Tipo

- Verificam e identificam os tipos de dados.

| Operador | Descrição | Exemplo (`a = 5, b = "texto"`) | Resultado |
|----------|-----------|-------------------|-----------|
| `typeof` | Retorna o tipo da variável | `typeof a` | `"number"` |
| `instanceof` | Verifica se um objeto pertence a uma classe | `b instanceof String` | `false` |


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
