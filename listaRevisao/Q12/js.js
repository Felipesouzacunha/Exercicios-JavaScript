// Método de array: map() para transformar elementos
function dobrarNumeros(numeros) {
    return numeros.map(numero => numero * 2);
}

// Método de string: toUpperCase() para converter para maiúsculas
function frasemaiuscula(frase) {
    let frasemaiuscula = frase.toUpperCase;
    console.log(frasemaiuscula)
}

// Exemplos de uso das funções
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = dobrarNumeros(numeros);
console.log("Números dobrados:", numerosDobrados);

let frase = "exemplo de manipulação de strings";
let fraseCapitalizada = frasemaiuscula(frase);
console.log("Frase capitalizada:", fraseCapitalizada);
