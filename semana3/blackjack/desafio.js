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

while(carta1.texto === "A" && carta3.texto === "A" || carta2.texto === "A" && carta4.texto === "A"){
   console.log("Sortear de novo pois não é permitido sair com duas cartas de valor A na mão. ")

   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()
   
   if(!confirm("Haverá um novo sorteio")){
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
}





