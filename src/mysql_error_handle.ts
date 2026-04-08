import { type Response } from "express"

class MysqlErrorHandle
{
    constructor(readonly erro:unknown, readonly res:Response){
    }
    validar(){
        console.log(this.erro)
        if (this.erro instanceof Error && "code" in this.erro && this.erro.code === "ECONNREFUSED") {
            this.res.status(500).json({ mensagem: "Erro: Ligue o LARAGON" })
        } else if (this.erro instanceof Error && "code" in this.erro && this.erro.code === "ER_BAD_DB_ERROR") {
            this.res.status(500).json({ mensagem: "Erro: Crie o banco de dados e insira ele no códigs" })
        } else if (this.erro instanceof Error && "code" in this.erro && this.erro.code === "ER_ACCESS_DENIED_ERROR") {
            this.res.status(500).json({ mensagem: "Erro: O Usuário e/ou Senha está erraarr" })
        } else if (this.erro instanceof Error && "code" in this.erro && this.erro.code === "ER_NO_SUCH_TABLE") {
            this.res.status(500).json({ mensagem: "Erro: TABELA ERRADA DESGRAÇA" })
        } else if (this.erro instanceof Error && "code" in this.erro && this.erro.code === "ER_PARSE_ERROR") {
            this.res.status(500).json({ mensagem: "Erro: CONFERE O SQL DO EXECUTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" })
        }
        else {
            this.res.status(500).json({ mensagem: "Erro no servidor que não serve nada do ET" })
        }
    }
}

export default MysqlErrorHandle