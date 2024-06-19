/* Q1 
var numeroInt = 1;
var numeroDec =1.1
console.log(typeof numeroInt)
console.log(typeof numeroDec)*/


/* Q2
var nome = prompt("digite seu nome")
var idade = prompt("digite sua idade")

console.log(`sue nome é ${nome} e a idade é ${idade}`)

Q3
let numero = prompt("digite um numero");
let int = parseInt(numero);
console.log(int)

Q4
var altura = prompt("digite sua altura em metros")
let float = parseFloat(altura)
console.log(float)

Q5
var idade = prompt("digite sua idade")
let idaden = Number(idade);
console.log(idaden)

Q6
let numero = Number(prompt("digite um numero"));
if (numero % 2 == 0){
    console.log("par")
}else{
    console.log("impar")
}

Q7
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

let maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}

console.log(`${maiorNumero}`);

Q8
let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))

let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    console.log('aprovado')
}else{
    console.log('reprovado')
}

Q9
let anoAtual = new Date().getFullYear();

let anoNascimento = parseInt(prompt("Digite o ano de seu nascimento (AAAA):"));

let idade = anoAtual - anoNascimento;
if (idade >= 18) {
    console.log(`Você é maior de idade.`);
} else {
    console.log(`Você ainda não é maior de idade.`);
}

Q10
let escolha = prompt("Escolha o que quer converter: 1) - Celsius para Fahrenheit 2) - Fahrenheit para Celsius");


escolha = parseInt(escolha);

if (escolha === 1) {
    // Conversão de Celsius para Fahrenheit
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    console.log(`${temperaturaCelsius}°C corresponde a ${temperaturaFahrenheit.toFixed(2)}°F.`);
} else if (escolha === 2) {
    // Conversão de Fahrenheit para Celsius
    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
    console.log(`${temperaturaFahrenheit}°F corresponde a ${temperaturaCelsius.toFixed(2)}°C.`);
} else {
    console.log("Opção inválida. Por favor, escolha 1 ou 2.");
}

Q11
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro.");
} else {
    console.log("Nenhum dos números é múltiplo do outro.");
}

Q12
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("É um triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Os valores informados não formam um triângulo válido.");
}

Q13
let escolha = prompt("Escolha um prato do menu:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Macarrão");

escolha = parseInt(escolha);
let preco, descricao;

switch (escolha) {
    case 1:
        preco = 30.00;
        descricao = "Pizza: Massa crocante com molho de tomate, queijo derretido e ingredientes diversos.";
        break;
    case 2:
        preco = 20.00;
        descricao = "Hambúrguer: Pão de hambúrguer, carne grelhada, queijo, alface, tomate e maionese.";
        break;
    case 3:
        preco = 15.00;
        descricao = "Salada: Alface, tomate, cenoura, pepino e molho de sua escolha.";
        break;
    case 4:
        preco = 25.00;
        descricao = "Macarrão: Macarrão al dente com molho de tomate, queijo parmesão e ervas.";
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção de 1 a 4.");
}

if (preco !== undefined && descricao !== undefined) {
    console.log(`Você escolheu:\n${descricao}\nPreço: R$ ${preco.toFixed(2)}`);
}

Q14
let altura = parseFloat(prompt("Digite sua altura em metros"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas"));

let imc = peso / (altura * altura);

let classificacao;

switch (true) {
    case (imc < 18.5):
        classificacao = "Abaixo do peso";
        break;
    case (imc >= 18.5 && imc < 24.9):
        classificacao = "Peso normal";
        break;
    case (imc >= 25 && imc < 29.9):
        classificacao = "Sobrepeso";
        break;
    case (imc >= 30):
        classificacao = "Obesidade";
        break;
    default:
        classificacao = "Classificação não disponível";
}


console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);

Q15
let numero = parseInt(prompt("Digite um número positivo:"));

    let contador = 0;
    while (contador <= numero) {
        if (contador % 2 === 0) {
            console.log(contador);
        }
        contador++;
    }

Q16
let numero = parseInt(prompt("Digite um número positivo:"));

if (numero <= 0 || isNaN(numero)) {
    console.log("Número inválido. Por favor, digite um número positivo.");
} else {
    console.log(`Números ímpares de 0 até ${numero}:`);

    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

Q17
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (numero < 0 || isNaN(numero)) {
    console.log("Número inválido. Por favor, digite um número positivo.");
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

Q18
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("Bem-vindo ao jogo de adivinhação! Você tem 10 tentativas para adivinhar o número.");

let tentativas = 0;
let acertou = false;

while (tentativas < 10) {
    tentativas++;

    let palpite = parseInt(prompt(`Tentativa ${tentativas}: Digite um número entre 1 e 100:`));

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        tentativas--; // Não conta como tentativa válida
        continue;
    }

    if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`);
        acertou = true;
        break;
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior. Tente novamente.");
    } else {
        console.log("O número secreto é menor. Tente novamente.");
    }
}

if (!acertou) {
    console.log(`Suas 10 tentativas acabaram. O número secreto era ${numeroSecreto}.`);
}

Q19
function mudando() {
    document.getElementById('mudar').innerHTML = "A mágica em JS continua!"
}

Q20
function mudando() {
    document.getElementById('mudar').style.color = "green";
}

Q21
function ocultarParagrafo() {
    document.getElementById("paragrafo").style.display = "none";
}

function mostrarParagrafo() {
    document.getElementById("paragrafo").style.display = "block";
}

Q22
*/
