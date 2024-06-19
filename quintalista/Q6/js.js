function imprimirPrimeiroUltimoNome(nomeCompleto) {
    let partesNome = nomeCompleto.split(" ");

    let primeiroNome = partesNome[0];

    let ultimoNome = partesNome[partesNome.length - 1];

    console.log(`Primeiro nome: ${primeiroNome}`);
    console.log(`Último nome: ${ultimoNome}`);
}
