//---Exercicio 1---//

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) // R= False, pois o sinal && só será verdadeira se todos os boleanos forem verdadeiros "true".

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) // R= Dentro do parenteses é true...como o boleano 3 é o contrario do boleano 2, e o boleano 2 é true agora, então o boleano 3 é false. Como o && só fica true se todos forem true, a resposta é false.

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // R= True, prq o resultado o resultado do parenteses é true, e o oposto do ultimo resultado, é true. Então fica True && True. Resultado true.

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) // R= False, pois dentro do primeiro parenteses é false, pois o contarrio do bool1 que é true, é false. False||bool2 que é false, fica false. Então o resultado do parenteses é false. O resultado anterior (TRUE) & FALSE, igual a false. False e o oposto do bool3, bool 3 é true mas fica false por ser o oposto dele. False && False = False.

console.log("e. ", typeof resultado) // R= Resultado de tipo boleano. Pelos caracteres utilizados.*/

//---Exercicio 2---//

/*let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)*/

/*a. O que é `array` e como se declara em `JS`? //R= Possibilita colocarmos varios valores em uma propiedade. Se declara com colchetes.

b. Qual o index inicial de um `array`? //R= 0.

c. Como se determinar o tamanho do `array`? //R= Colocar -> console.log(array.length) para mostrar qual quantos itens tem nela. 

d. Indique todas as mensagens impressas no console. 
//R=
        I.  undefined R=(Não foi dado nenhum valor a array)
        II.  null R=(Foi dado um valor nulo)
        III.  11 R=(Mostra quantos itens tem na array)
        IV.  3  e  4 R=(Pega o prinmeiro item da array, e após isso, pega o numero seguinte ao primeiro.)
        V.  19  e  9 R=(Pegou o i q indica o primeiro itwm da array, (valor 3), +6. Fica nove. Imprime o i+1+19 e imprime o resultado da i+6)
        VI.  3 R=(Printa o i que é o item 0 que tem valor 3.)
        VII.  1 R=(i=12, i-3 = 9. 9 dividido pela array 1. 9%4 = 8 com resto 1)*/

    
/*-----Exercícios de escrita de código-----*/

/*Exercicio 1*/

/*a-*/
//let F = 77
//K = (F - 32)*5/9 + 273.15
//console.log(K)

/*b-*/
//let C = 80
//F = (C)*9/5 + 32
//console.log(F)

/*c-*/
//C = 30
//F = (C)*9/5 + 32
//K = (F - 32)*5/9 + 273.15
//console.log("30 graus Celsius em FAHRENHEIT= "+ F)
//console.log("30 graus Celsius em KELVIN= " +K)

/*d-*/
/*let C = prompt("Quantos graus faz aí?")
F = (C)*9/5 + 32
K = (F - 32)*5/9 + 273.15
console.log(C +" graus Celsius em FAHRENHEIT= "+ F)
console.log(C +" graus Celsius em KELVIN= " +K)*/

/*Exercicio 2*/
/*let endereco = prompt("Qual o seu endereço?")
console.log("Resposta= "+ endereco)

let cor = prompt("Qual sua cor preferida?")
console.log("Resposta= "+cor)

let nome = prompt("Qual o seu nome?")
console.log("Resposta= "+ nome)

let sobrenome = prompt("Qual o seu sobrenome?")
console.log("Resposta= "+ sobrenome)

let filme = prompt("Qual o seu filme favorito?")
console.log("Resposta= "+ filme)*/

/*Exercicio 3*/

let h = prompt("Digite as horas do seu consumo")
qr = 0,05
let consumo = (0,05) * (h)
console.log("O valor a ser pago será de= "+ consumo)