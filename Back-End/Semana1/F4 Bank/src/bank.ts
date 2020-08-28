import { type } from "os"

type usuario= {
    nome: string,
    cpf: number,
    idade: number,
    saldo: number
    extrato:{
        valor: number,
        data: number,
        descricao: string
    }
}

// type extract={
//     valor: number,
//     data: number,
//     descricao: string
// }

const usuarios: usuario={
    nome: "A",
    cpf: 123456,
    idade: 18,
    saldo: 0,
    extrato:{
        valor: 0,
        data: 12,
        descricao: "abc"
    }
}

if(usuarios.idade< 17){
    console.log{"Usuário recusado"}
}