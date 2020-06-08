/*a)*/ /*let idadeHumana = Number(prompt("Digite a idade do seu cachorro:"))

const idadeCanina = (age) =>{
    let resultado = idadeHumana * 7
    return resultado
}

console.log ("A idade do seu cachorro é: " + idadeCanina(idadeHumana))*/

/*b)*/ 
let nome = prompt("Digite seu nome: ") 
let idade =  Number(prompt("Digite sua idade: ")) 
let endereco = prompt("Digite seu endereço: ") 
let estudante = confirm("Você é um estudante?")

const funcao = ()=>{
    if(estudante){
    estudante = "Sou estudante"
    }else{
    estudante = "Não sou estudante"
    }
}
console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${endereco}, e ${estudante}`)
