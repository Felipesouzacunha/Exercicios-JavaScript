
function verificarElegibilidade(rendaMensal, idade) {
    if (rendaMensal > 3000 && idade >= 18 && idade <= 65) {
        return "Elegível para empréstimo.";
    } else {
        return "Não elegível para empréstimo.";
    }
}
