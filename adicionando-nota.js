/*
Desafio - Adicionando Elementos em uma Array

Um professor acidentalmente passou apenas 3 das notas no sistema para um aluno: 10, 6, 8

Para corrigir, adicione a nota 7 e faça o cáculo da média correta

*/

const notas = [10, 6, 8];

// Para inserirmos mais um elemento no array, utilizamos a função push (Lembrando que o valor será inserido no final - ultima posição da array). E o parâmetro será o seu respectivo valor (neste caso a nota 7)
notas.push(7)

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

