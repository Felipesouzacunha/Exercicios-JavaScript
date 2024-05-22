
function soma() {
    const num1 = Number(document.querySelector('input#num1').value)
    const num2 = Number(document.querySelector('input#num2').value)
    const resultado = document.querySelector('p#resultado')
    resultado.innerHTML = num1 + num2;
}

function sub() {
    const num1 = Number(document.querySelector('input#num1').value)
    const num2 = Number(document.querySelector('input#num2').value)
    const resultado = document.querySelector('p#resultado')
    resultado.innerHTML = num1 - num2;
}
function multi() {
    const num1 = Number(document.querySelector('input#num1').value)
    const num2 = Number(document.querySelector('input#num2').value)
    const resultado = document.querySelector('p#resultado')
    resultado.innerHTML = num1 * num2;
}
function dividir() {
    const num1 = Number(document.querySelector('input#num1').value)
    const num2 = Number(document.querySelector('input#num2').value)
    const resultado = document.querySelector('p#resultado')
    resultado.innerHTML = num1 / num2;
}