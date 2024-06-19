
let minhaCaixa = document.getElementById('minhaCaixa');


minhaCaixa.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});

minhaCaixa.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'blue';
});
