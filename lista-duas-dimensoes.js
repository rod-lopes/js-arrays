/*

Desafio - Lista com 2 dimensões
Crie uma lista com os seguintes alunos e alunas - 'João', 'Juliana', 'Caio', 'Ana'

Crie uma lista com as seguintes médias: 10,8,7.5,9

Crie uma lista com 2 dimensões com os nomes e médias.

*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,8,7.5,9]
                        // 0        //1
let listaDeNotasEAlunos = [alunos,mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é: ${listaDeNotasEAlunos[1][0]}`)