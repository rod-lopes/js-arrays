/*

Desafio - Juntando as salas

Haverá uma palestra sobre padrões de projetos para as alunas das salas de JavaScript e Python. Junte ambas as salas em uma única lista que exiba todas as alunas.

*/

const salaPython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavaScript = ['Julinana', 'Leonardo', 'Raquel']

//Para unir arrays utilizamos a instrução contact
const salaUnificadas = salaPython.concat(salaDeJavaScript)

console.log(salaUnificadas)