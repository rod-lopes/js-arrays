/*
Colocando o nome em letra maiúscula através do método for

*/

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas)

/*
Colocando o primeiro nome de cada palavra em maiúscula.

*/


const minhaFrase = "este é apenas um teste para exemplicar.";
const palavras = minhaFrase.split(" ");

for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
}

const frase = palavras.join(" ");

console.log(frase)

