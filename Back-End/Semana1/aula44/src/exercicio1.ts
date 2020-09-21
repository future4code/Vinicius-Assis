/*a*/ 
const minhaString: string = "String"
//R= Apareceu o erro "Type '12' is not assignable to type 'string'."

/*b*/ 
const meuNumero: number | string = "a"
//R= Usando o boolean |. 

/*c*/ 
type pessoa= {
    nome: string,
    idade: number,
    corFavorita: cores
}

enum cores{
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    Indigo = "Indigo",
    Violeta = "Violeta"
}

const meuObjeto: pessoa={
    nome: "João",
    idade: 12,
    corFavorita: cores.Vermelho
}

/*d*/
const meuObjeto1: pessoa={
    nome: "Joã",
    idade: 13,
    corFavorita: cores.Vermelho 
}
const meuObjeto2: pessoa={
    nome: "Joãozinho",
    idade: 14,
    corFavorita: cores.Vermelho 
}
const meuObjeto3: pessoa={
    nome: "Joãzinho",
    idade: 15,
    corFavorita: cores.Vermelho 
}

/*e*/
// enum cores{
//     Vermelho = "Vermelho",
//     Laranja = "Laranja",
//     Amarelo = "Amarelo",
//     Verde = "Verde",
//     Azul = "Azul",
//     Indigo = "Indigo",
//     Violeta = "Violeta"
// }
