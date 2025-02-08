// IF, ELSE IF e ELSE

let idade = 20;
let horario = 19;
let temIngressos = true;

if (idade >= 18) {
  console.log("Você é maior de idade.");

  if (horario >= 18 && horario <= 22) {
    console.log("Aproveite o show à noite!");
    
    if (temIngressos) {
      console.log("Você tem ingressos para o show!");
    } else {
      console.log("Você não tem ingressos para o show.");
    }

  } else if (horario < 18) {
    console.log("O show começa à noite, ainda está cedo.");
  } else {
    console.log("O show já acabou, vem no próximo!");
  }

} else {
  console.log("Você não é maior de idade, não pode entrar no show.");
}

// SWITCH CASE

let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("Você escolheu uma banana.");
    break;
  case "maçã":
    console.log("Você escolheu uma maçã.");
    break;
  case "laranja":
    console.log("Você escolheu uma laranja.");
    break;
  default:
    console.log("Fruta desconhecida.");
}
