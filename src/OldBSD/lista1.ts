
/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 


function criaNovoVetor(vetor:number[], valor1:number, valor2:number){
    return [...vetor, valor1, valor2]
}
console.log(criaNovoVetor([1,2,3,56],23,4324))

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

function divisivelPor11(min:number, max:number){
    let ar:number[] = []
    for (let i = min; i <= max; i++){
        if(i % 11 ===0){
            ar.push(i)
        }
    }
    return ar
}
console.log(divisivelPor11(1, 123345))

/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */

interface Pessoa{id:number, nome:string, idade:number}
const p23:Pessoa = {id: 12, nome:"syegdijysadgfjysdgfuysdfsdyjfgakusyeg", idade:1209874567843}
const p24:Pessoa = {id: 12, nome:"syegdijysadgfjysdgfuysdfsdyjfgakusyeg", idade:324567}
function maioresDeIdade(vetor12:Pessoa[]){
    return vetor12.filter(Pessoa => Pessoa.idade >= 18)
}
console.log(maioresDeIdade([p23,p24]))

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

function resolveEquacao(vetor:number[]){
    return vetor.map(x => x**2 + 2*x + 6)
}
console.log(resolveEquacao([1,2,3]))
