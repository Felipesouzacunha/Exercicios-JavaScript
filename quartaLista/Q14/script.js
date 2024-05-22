function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = peso / (altura * altura);

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<br>`;
    
    if (imc < 18.5) {
        resultadoElemento.innerHTML += "Você está abaixo do peso.";
    } else if (imc < 24.9) {
        resultadoElemento.innerHTML += "Você está dentro do peso normal.";
    } else if (imc < 29.9) {
        resultadoElemento.innerHTML += "Você está com sobrepeso.";
    } else {
        resultadoElemento.innerHTML += "Você está obeso.";
    }
}