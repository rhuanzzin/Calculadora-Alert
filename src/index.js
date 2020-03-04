

function start(){
  let a = Number(prompt("Escolha Primeiro número"));
  let op = prompt("Escolha a operação desejada");
  let b = Number(prompt("Escolha o segundo número"));


function soma(a, b) {
  return document.getElementById('resultado').innerHTML = `<h2>a soma entre ${a} e ${b} é ${a + b}<h2>`;
}
function sub(a, b) {
  return document.getElementById('resultado').innerHTML = `<h2>a subtração entre ${a} e ${b} é ${a - b} </h2>`;

}
function mult(a, b) {
  return document.getElementById('resultado').innerHTML = `<h2>a multiplicação entre ${a} e ${b} é ${a * b}</h2`;
}
function divs(a, b) {
  return document.getElementById('resultado').innerHTML = `<h2>a divisão entre ${a} e ${b} é ${a / b}<h2>`;
}

switch (op) {
  case "+":
    soma(a, b);
    break;

  case "-":
    sub(a, b);
    break;

  case "*":
    mult(a, b);
    break;

  case "/":
    divs(a, b);
    break;

  default:
    break;
}
}
