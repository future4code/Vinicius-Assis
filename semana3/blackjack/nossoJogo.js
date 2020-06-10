/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de BlackJack")

let carta1 = comprarCarta()
let carta2 = comprarCarta()
let carta3 = comprarCarta()
let carta4 = comprarCarta()



if(!confirm("Quer iniciar uma nova rodada?")){
   console.log("O jogo acabou")
}else{
   /*carta1
   carta2
   carta3
   carta4 */
   let resultado1 = carta1.valor + carta3.valor
   let resultado2 = carta2.valor + carta4.valor
   console.log(`Usuário - cartas: ${carta1.texto} ${carta3.texto} - pontuação: ${resultado1} `) 
   console.log(`Computador - cartas: ${carta2.texto} ${carta4.texto} - pontuação: ${resultado2}`)
   
   if(resultado1 > resultado2 || resultado1 === 21){
      console.log("O Usuário ganhou")
   }else if(resultado1 < resultado2 || resultado2 === 21){
      console.log("O Computador ganhou")
   }else{
      console.log("Empate")
   }
}





/*const cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let usuario = " "
let computador = " "

for(let num of cartas){
   usuario = num
}
console.log(usuario)*/