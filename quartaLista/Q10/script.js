function pedirNumeros() {
    var numero1 = Number(prompt('Digite o primeiro numero'))
    var numero2 = Number(prompt('Digite o segundo numero'))

    var media = calcmedia(numero1, numero2);

    console.log(media);
}

const calcmedia = (num1, num2) => {
    return (num1 + num2) / 2;
}

pedirNumeros()