/*
Desafio - Atualizando Elementos

Crie uma lista de chamada com os seguintes alunos - 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

Porém, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize a lista

*/

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// Para que possasmos remover alguns elementos dentro do array, utiliza-se a instrução splice()

listaDeChamada.splice(1,2,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)