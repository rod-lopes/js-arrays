/* Desadio - Deletando elementos

Um professor acidentalmente lançou 5 notas no sistema para um aluno: 10,6,8,5.5 e 10

Para corrigir, remova a última nota e faça o cálculo da média correta.

*/

const notas = [10, 6, 8, 5.5, 10 ]
// Para removermos um elemento no array, utilizamos a função pop (Lembrando que o valor será removido no final - ultima posição da array). E o parâmetro será vazio como padrão ().

notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média do aluno é ${media}`)