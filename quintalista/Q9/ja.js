
let filmes = [];


for (let i = 1; i <= 5; i++) {
    let nomeFilme = prompt(`Digite o nome do ${i}º filme:`);
    filmes.push(nomeFilme);
}


console.log("Filmes digitados:");
for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
}
