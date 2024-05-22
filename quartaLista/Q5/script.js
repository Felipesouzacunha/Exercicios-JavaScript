var numero1 = prompt('Digite o primeiro numero');
var numero2 = prompt('Digite o seungo numero');
var numero3 = prompt('Digite o terceiro numero');

function calcularMedia(num1, num2, num3){

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    var media = (num1 + num2 + num3) / 3;

    console.log('A média dos três números é: ' + media);
}

calcularMedia(numero1, numero2, numero3)