//a)
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0
let menor = " "
for(let num of array){
    if(num > maior){
        maior = num
        menor = maior
    }
    if(num < menor){
        menor = num
    }
}
console.log(`O maior valor é ${maior}, e o menor valor é ${menor}`)*/

//b)
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let divisao = []

for(let num of array){
    divisao.push(num / 10)
} 
console.log(divisao)*/

//c)
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let divisao = []

for(let num of array){
    if(num % 2 === 0){
        divisao.push(num)
    }
} 
console.log(divisao)*/

//d)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let string = []

for(let i = 0; i < array.length; i++ ){
    console.log(`O elemento do index ${i} é ${array[i]}`)
} 
console.log(string)