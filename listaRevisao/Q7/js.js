function exibirMensagem() {
    let nome = document.getElementById('nomeInput').value;

    if (nome.trim() !== '') {
        let mensagem = `Olá, ${nome}! Bem-vindo(a).`;

        document.getElementById('mensagemBoasVindas').innerHTML = mensagem;
    } else {
        alert('Por favor, informe seu nome.');
    }
}