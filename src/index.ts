let x = 10

let nome:string = "America Ya!"

let vetor:number[] = [1,2,3,4]

let nomes:string[] = ["oi","oi"]

console.log(nomes)

let bol:boolean = true;

bol = false

const variavel:any = "Hello!"

const a:undefined = undefined

const obj:{id:number, nome:string, idade:number} = {
    id:1,
    nome:"Epstein",
    idade:47
}

//console.log(obj)

obj.id = 2
obj.nome = "Tere"
obj.idade = Infinity

let x1:any = "10"

const NOSSA = [0,1,2,3,4]
NOSSA[0] = 10
console.log(NOSSA)
//asdfasdg = [0,1,2,3,4]

let asdf = [0,1,2,3,4]
asdf = [0,1,2,3,4]


let outraletra: number|string = "NOSSA"
outraletra = 10


const obj2:{id:number, nome:string, idade:number, molestador?:string} = {
    id:12,
    nome:"Epstein",
    idade:47
}

type Pessoa = {id:number, nome:string, idade:number, molestador?:string}

const p:Pessoa = { 
    id:10,
    nome:"ALA TEU PAI",
    idade:34,
    molestador:"Sim"
}

const p1:Pessoa = { 
    id:10,
    nome:"ALA TUA MÃE",
    idade:34,
    molestador:"Sim"
}

//function nomeFuncao(variavel:number):number{
//    return 10
//}

const f = (variavel:number) =>{
    console.log("NA INTERNETTTTTTTTT")
    return 10
}
const f3 = f(10)

console.log("O valor de X é "+f3.toString())
console.log(`O valor de X é ${f3}`)


function somaVetor(vetor:number[]){
    let soma:number = 0 
    for (let i = 0; i < vetor.length; i++) {
        let soma1 = vetor[i]
        soma += soma1!
    }
    return soma
}

console.log(somaVetor([...Array(101).keys()]))


// some os pares de um array

let array1:number[] = [1, 3, 2, 2,2,4, 7, 5, 8, 9]

function sumEven(vetor:number[]){
     let soma:number = 0 
     for (let i = 0; i < vetor.length; i++) {
        let soma1 = vetor[i]
        if (soma1! % i === 0){
            soma += soma1!
        }
    }
    return soma
}

console.log(sumEven(array1))


// 3 - faça uma função que receba 2 vetores e
// faça a operação merge entre eles
// EX.: mergeVetor([1,2,4],[3,5,6]) => [1,2,3,4,5,6]

function mergeVetor(vetor1:number[], vetor2:number[]){

}

/*
let ar:number[] = [1,2,4]
let ar1:number[] = [3,5,6]
let arroz = ar.concat(ar1)
console.log(arroz)*/


/*
test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 4, 5)).toEqual([1, 2, 3, 4, 5])
    expect(vetor).toEqual([1, 2, 3])
})*/

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


function newArray(vetor:number[], num:number, num2:number){
    return [...vetor, num, num2]
}
console.log(newArray([1,2,3,56],23,4324))

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

function arrayDiv11(n1:number, n2:number){
    let ar:number[] = []
    for (let i = n1; i <= n2; i++){
        if(i % 11 ===0){
            ar.push(i)
        }
    }
    return ar
}
console.log(arrayDiv11(1, 123345))

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

interface person{id:number, nome:string, idade:number}
const p23:person = {id: 12, nome:"syegdijysadgfjysdgfuysdfsdyjfgakusyeg", idade:1209874567843}
const p24:person = {id: 12, nome:"syegdijysadgfjysdgfuysdfsdyjfgakusyeg", idade:324567}
function maioresDeIdade(vetor12:person[]){
    return vetor12.filter(person => person.idade >= 18)
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



