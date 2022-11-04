/*
Desafio - Filtrando por nota

Depois de calcular a média dos alunos,precisamos mostrar que está reprovado entre os alunos:

- 'Ana', 'Marcos', 'Maria', 'Mauro'
- 7,4.5,8,7.5

*/

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7,4.5,8,7.5]

const reprovados = nomes.filter((_,indice) => notas[indice] < 5)
const notasReprovados = notas.filter((_, indice) => notas[indice] <5)
console.log(`Reprovado(s): ${reprovados}, sendo suas respectivas nota(s) ${notasReprovados}`)