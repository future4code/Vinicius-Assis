const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//a)R= O comando push envia um valor para uma array.
//b)R= (4) 10, 15, 20, 30
//c)R= Se a variavel numero tivesse valor de 3 seria impresso "(6) [12, 15, 18, 21, 27, 30]". Se a variavel numero tivesse o valor 4 seria impresso "(1) [12]"