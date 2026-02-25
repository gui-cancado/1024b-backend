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