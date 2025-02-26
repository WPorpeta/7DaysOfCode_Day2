// Solicita as informações do usuário
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibe a mensagem personalizada
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Exercício opcional
let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (gostaDeEstudar == "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeEstudar == "2") {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Opção inválida! Por favor, responda com 1 ou 2.");
}
