import mysql from 'mysql2/promise'
import express from 'express'

const app = express()
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1'
})

app.get("/pessoas",async(req,res)=>{
    try {
        const [resultado, campos] = 
            await connection.execute(`SELECT * FROM pessoa `)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err)
        res.status(500).json({mensagem: "Erro no servidor que não serve nada do ET"})
    }
})
app.post("/pessoas",async(req,res)=>{
    try {
        // const preparecao = await connection.prepare("select * from pessoa")
        const {id,nome} = req.body
        const [resultado, campos] = 
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({mensagem:"Suckcess"})
    } catch (err) {
        console.log(err)
        res.status(500).json({mensagem:"Erro no servidor que não serve nada"})
    }
})

app.listen(8000, ()=>{
    console.log("Servidor iniciado na porta 8000")
})
