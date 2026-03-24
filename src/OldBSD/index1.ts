// Promessas
// síncronas e assíncronas
// Paralelismo

console.log("Início da execução do código")

const funcao = async ()=>{
    const prom:Promise<string> = 
    new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
            reject("HELLO")
        }, 2**10)//Math.PI*1000)
    })
    return prom
}
//funcao()
//.then((resultado)=>console.log(resultado))
//.catch((erro)=>console.log("Erro Promise: " + erro))
try{
    const resultado = await funcao()
    console.log(resultado)
}catch(error){
    console.log("Mensagem de erro: " + error)
}


console.log("Fim da execução do código")

// Crie uma função que tenha 50% de chance de retornar "tere" após
// 5 segundos ou a função devolve o valor null
// function devolveTere()
// Faça o tratamento de erro com o try e catch

/*
async function devolveTere(){
    const prom:Promise<string|null> =
    new Promise<string|null>((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.round(Math.random()) == 1){
                resolve("Tere")
            }else{
                resolve("")
            }
        }, 5000)
    })
    return prom
}

try{
    const resultado = await devolveTere()
    console.log(resultado)
}catch(error){
    console.log("Mensagem de erro: " + error)
}*/

function buscaNumero(vetor:number[], numeroBuscado:number){
    const result = vetor.find((vetor) => vetor == numeroBuscado)
    /*if (result != undefined){
        return result
    }else{
        return -1
    }*/
   return result != undefined ? result : -1
}

console.log(buscaNumero([1,2,3,4,5], 2))

const numeros = [1, 2, 3, 4, 5, 6, 7]
function encontrarVetor(num:number){num==3 ? true : false}

console.log(numeros.find((num:number)=>num==3))
console.log(numeros.filter((num:number)=>num>3))

interface Pessoa{
    id: number,
    nome: string
}
const pessoa:Pessoa[] = [
    {id: 1, nome: "Hi"},
    {id: 23, nome: "AI AII AAAAIIII PARA"}
]
console.log(pessoa.filter((pessoa:Pessoa)=> pessoa.id >=3))

console.log(numeros.map((num:number)=>num**2))

console.log(...numeros)

const vetor = numeros


const vetor2 = vetor
const vetor3 = [...vetor, ...vetor]
vetor2[0] = 10
vetor3[1] = 10
console.log(vetor)
console.log(vetor3)

const [posicao1, posicao2, ...resto] = vetor3
console.log(posicao1,posicao2,resto)

const {id} = pessoa[0]!
console.log(id)