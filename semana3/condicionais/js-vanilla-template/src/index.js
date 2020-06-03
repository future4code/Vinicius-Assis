



//Exercicio 1
/*const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")}*/
//R= Este teste realiza uma divisão do numero digitado pelo usuário por 2.
//R= Imprime numeros pares, pois esses números ao serem divididos por dois não tem nenhum resto.
//R= Para números impares, pois são aprovados apenas números que não deixam resto ao serem divididos por 2.

//Exercicio2

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
//a)R= Para o usuário vizualizar o preço da fruta que ele selecionou.
//b)R= O preço que aparecerá será de 2.25.
//c)R= 24.55.
//d)R= O valor da Pêra fica de 5.

//Exercício 3

/*const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)*/
//R= Dá erro, pois o comando console não consegue ler as o valor das variaveis nos blocos.

//-----Exercicios de código-----//

//Exercicio 4

//a) R= Não acontecia nada
/*let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite um segundo número:"))

if(numberOne > numberTwo){
        console.log(numberOne,numberTwo)
} else if(numberOne < numberTwo){
        console.log(numberTwo,numberOne)  // R= Não acontecia nada quando colocava números iguais          
}*/
//b)
/*let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite um segundo número:"))
let numberTree = Number(prompt("Digite um terceiro número:"))

if((numberOne > numberTwo) && (numberTwo > numberTree)){
        console.log(numberOne,numberTwo,numberTree)
} else if((numberOne < numberTwo) && (numberOne > numberTree)){
        console.log(numberTwo,numberOne,numberTree) 
} else if((numberTree > numberOne) && (numberOne > numberTwo)){
        console.log(numberTree,numberOne,numberTwo) 
} else if((numberTree > numberTwo) && (numberTwo > numberOne)){
        console.log(numberTree,numberTwo,numberOne)
} else if((numberTwo > numberTree) && (numberTree > numberOne)){
        console.log(numberTwo,numberTree,numberOne)
} else if((numberOne > numberTwo) && (numberTwo < numberTree)){
        console.log(numberOne,numberTree,numberTwo) //Não acontece nada
}*/

//c)
/*let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite um segundo número:"))
let numberTree = Number(prompt("Digite um terceiro número:"))

if((numberOne > numberTwo) && (numberTwo > numberTree)){
        console.log(numberOne,numberTwo,numberTree)
} else if((numberOne < numberTwo) && (numberOne > numberTree)){
        console.log(numberTwo,numberOne,numberTree) 
} else if((numberTree > numberOne) && (numberOne > numberTwo)){
        console.log(numberTree,numberOne,numberTwo) 
} else if((numberTree > numberTwo) && (numberTwo > numberOne)){
        console.log(numberTree,numberTwo,numberOne)
} else if((numberTwo > numberTree) && (numberTree > numberOne)){
        console.log(numberTwo,numberTree,numberOne)
} else if((numberOne > numberTwo) && (numberTwo < numberTree)){
        console.log(numberOne,numberTree,numberTwo)
}else{
    console.log("Os números digitados foram iguais, digite ao menos um número diferente")
}*/

//Exercicio 5

let animal = prompt("Digite o nome do animal")
let espinha = prompt("Esse animal é vertebrado?")
switch(espinha){
        case"sim":
        let pelo = prompt("Esse animal possuiu pelos?")
        switch(pelo){
                case"sim":
                let mamifero = prompt("Esse animal é um mamifero?")
                switch(mamifero){
                        case"sim":
                        let tipo = prompt("Esse mamifero é racional?")
                        switch(tipo){
                                case"sim":
                                console.log("Seu animal é o Ser Humano")
                        }
                        break
                        case"não":
                        console.log("Seu animal é um mamifero não racional!")
                }
                break
                case"não":
                let penas = prompt("Esse animal possui penas?")
                switch(penas){
                        case"sim":
                        console.log("Seu animal é uma ave!")
                        break
                        case"não":
                        let terra = prompt("Seu animal é um animal terrestre?")
                        switch(terra){
                                case"sim":
                                let anfibio = prompt("Seu animal passa parte de sua vida na água?")
                                switch(anfibio){
                                        case"sim":
                                        console.log("Seu animal é um anfibio!")
                                        break
                                        case"não":
                                        console.log("Seu animal é um réptil!")
                                }
                                break
                                case"não":
                                console.log("Seu animal é um peixe!")
                        }
                }
        }
        break
        case"não":
        console.log("Seu animal é um invertebrado!")
}