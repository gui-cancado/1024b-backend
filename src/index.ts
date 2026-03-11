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

async function devolveTere(){
    const prom:Promise<string|null> =
    new Promise<string|null>((resolve,reject)=>{
        setTimeout(()=>{
            if((Math.floor(Math.random() * (0 - 1) + 0)) == 1){
                
            }
        })
    })
}

