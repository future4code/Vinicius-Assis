//a)
/*const num = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let tamanhoArray = (array)=>{
    for(i of num){
       let tam = num.length
        return tam
    }
}
console.log(tamanhoArray(num))*/

//b)
/*let numero = Number(prompt("Digite um número: "))*/

let parOuImpar = (numero)=>{
    if(numero % 2 === 0){
        return true
    }else{
        return false
    }
}
/*console.log(parOuImpar(numero))*/

//c)
/*const num = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

 let numPares = (array)=>{
    let pares = 0
    let impares = 0
    for(let i of num){
        if(i % 2 === 0){
            pares += 1
        }else{
            impares += 1
        }
    }
    return `Os pares são ${pares} e os impares são ${impares}`
 }
 console.log(numPares(num))*/

 //d)
 const num = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

 let numPares = (array)=>{
    let pares = 0
    let impares = 0
    for(let i of num){
        if(parOuImpar(i)){
            pares += 1
        }else{
            impares += 1
        }
    }
    return `Os pares são ${pares} e os impares são ${impares}`
 }
 console.log(numPares(num))