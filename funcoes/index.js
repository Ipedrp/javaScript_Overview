// Função Simples - Exemplo de saudação
function saudacao() {
    console.log("Bem-vindo ao nosso sistema!");
}
saudacao();

// Função com Retorno - Cálculo de desconto
function calcularDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
console.log(calcularDesconto(100, 10)); // Saída: 90

// Função Parametrizada - Envio de dados de usuário
function enviarDadosUsuario(nome, email) {
    console.log(`Enviando dados de ${nome} (${email}) para o servidor...`);
}
enviarDadosUsuario("João", "joao@email.com");

// Função com Parâmetro Rest - Soma de múltiplos valores
function somarValores(...valores) {
    return valores.reduce((total, valor) => total + valor, 0);
}
console.log(somarValores(5, 10, 15, 20)); // Saída: 50

// Função Anônima - Validação de formulário
const validarEmail = function(email) {
    return email.includes("@");
};
console.log(validarEmail("teste@email.com")); // Saída: true

// Arrow Function - Conversão de temperatura
const converterCelsiusParaFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(converterCelsiusParaFahrenheit(30)); // Saída: 86

// Função Aninhada - Processamento de pedidos
function processarPedido(pedido) {
    function validarPedido(pedido) {
        return pedido.itens.length > 0;
    }
    if (validarPedido(pedido)) {
        console.log("Pedido válido. Processando...");
    } else {
        console.log("Pedido inválido.");
    }
}
processarPedido({ itens: ["Produto A", "Produto B"] });

// Função Geradora - Paginação de dados
function* paginarDados(dados, tamanhoPagina) {
    for (let i = 0; i < dados.length; i += tamanhoPagina) {
        yield dados.slice(i, i + tamanhoPagina);
    }
}
const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const paginador = paginarDados(dados, 3);
console.log(paginador.next().value); // Saída: [1, 2, 3]
console.log(paginador.next().value); // Saída: [4, 5, 6]
console.log(paginador.next().value); // Saída: [7, 8, 9]
