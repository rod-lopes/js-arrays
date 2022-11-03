/*
Desafio - Sala dividida

Divida os alunos da sala abaixo em duas listas a mesma quantidade de alunos

'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'.

*/

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log("Tamano da array: ", nomes.length)

// Para que possa realizar a divisão, utilizamos a instrução slice (indice inicial, indice final)
//Corta o array nos indices 0-9 (sempre corta até 1 número anterior)
const sala1 = nomes.slice(0,nomes.length/2)
//Corta o array nos índices a partir do 10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala1: ${sala1}`)
console.log(`Alunos da sala2: ${sala2}`)

var nome = prompt();
