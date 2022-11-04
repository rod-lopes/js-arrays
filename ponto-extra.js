/*
Desafio - Ponto Extra

Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas.

10, 9,8,7,6
*/

const notas = [10, 9,8,7,6]
// ++nota: Primeiramente soma-se 1 depois retorna a nota 
const notasAtualizadas = notas.map(nota => nota ==10 ? nota : ++nota)

console.log (notasAtualizadas)

/* Por que não fazemos com foreach ao invés do map?
Por que o foreach não retorna nada. Ele executa o que está dentro do bloco.
Quando trabalhamos com map() retorna uma array
Como queremos receber uma array de notas atualizadas, uma boa prática é utilizar o map para retorno (adição de nota) como array atualiza. (salvo em uma outra variável)
*/