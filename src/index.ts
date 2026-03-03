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