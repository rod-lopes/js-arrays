/*
Desafio - Procurando na lista

Crie uma funcção que recebe como argumento o nome de um aluno
Verifique se o alino está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteha na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,8,7.5,9]

let listaDeNotasEAlunos = [alunos,mediasDosAlunos]

// includes retorna booleano (true ou false)
// indexOf retorna o número do índice aonde é encontrado o valor

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + `, sua média é ` + listaDeNotasEAlunos[1][indice]
    } else {
        return `O Aluno ${nomeDoAluno} não está cadastrado`
    }
}

console.log(exibeNomeNota("Juliana"))
