console.log(nome); // undefined
var nome = "João";

function minhaFuncao() {
  console.log(sobrenome); // undefined
  var sobrenome = "Silva";
  console.log(sobrenome); // "Silva"
}

minhaFuncao();
console.log(nome); // "João"
console.log(sobrenome); // Erro: sobrenome não está definido aqui


let carro = "Fusca";
console.log(carro); // Saída: "Fusca"

const PI = 3.14159;
console.log(PI); // Saída: 3.14159

let cor = "Azul";
cor = "Vermelho";
console.log("let: ", cor); // Saída: "let: Vermelho"

const corOriginal = "Azul";
console.log("const: ", corOriginal); // Saída: "const: Azul"

const meuObjeto = { propriedade: "valor" };
meuObjeto.propriedade = "novo valor";
console.log(meuObjeto); // Saída: { propriedade: "novo valor" }

function minhaFuncaoConst() {
  const mensagem = "Olá!";
  console.log(mensagem); // Saída: "Olá!"
}

minhaFuncaoConst();

if (true) {
  const numero = 10;
  console.log(numero); // Saída: 10
}