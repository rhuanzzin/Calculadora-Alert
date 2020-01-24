/* SINTAXE -  

function nome(parâmetro){
  corpo da função - lógica
  return 
}

invocando - nome()

---------------------------------

 function ola() {
  return document.write(`Olá`);
} 
*/

//ola();

let a = Number(prompt("Primeiro numero"));
let op = prompt("operação");
let b = Number(prompt("segundo número"));

function soma(a, b) {
  return document.write(`a soma entre ${a} e ${b} é ${a + b} `);
}
function sub(a, b) {
  return document.write(`a subtração entre ${a} e ${b} é ${a - b} `);
}
function mult(a, b) {
  return document.write(`a multiplicação entre ${a} e ${b} é ${a * b} `);
}
function divs(a, b) {
  return document.write(`a divisão entre ${a} e ${b} é ${a / b} `);
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
