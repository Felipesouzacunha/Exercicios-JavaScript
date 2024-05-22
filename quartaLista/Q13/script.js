function valorReais() {
    var reais = Number(prompt('Quantos reais deseja converter? '))

    var valorDolar = converterParaDolar(reais);

    alert(`Ficará com ${valorDolar} dolares`)

}

const converterParaDolar = (valorReais) =>{
    return valorReais * 5;
}

valorReais()