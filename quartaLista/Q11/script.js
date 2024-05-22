function numeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100);
    return numeroAleatorio
}

function jogo() {
    var numero = numeroAleatorio();

    var tentativa = 1;
    console.log(numero)
    do {
        let palpite = Number(prompt(`Tente adivinha o numero. ${tentativa}ª tentativa: `))
        tentativa++;

        if (palpite > numero) {
            alert('tente um numero menor');
        }else if(palpite < numero){
            alert('tente um numero maior');
        }else if(palpite == numero){
            alert('Voçê acertou!');
            break;
        }
    } while (tentativa <= 10);
}

jogo()