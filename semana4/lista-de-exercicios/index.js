//Exercicios de Interpretação de código

/* Respostas
1- Nesse exercicio a função conversor de moeda recebe o parâmetro valorEmDolar. A cotação será definida pelo usuário atrávez do prompt. Irá retornar o valor do parâmetro da função multiplicado pela a cotação do dólar. No caso será impresso no console, o valor da constante meuDinheiro que será o resultado dessa função tendo como valorEmDolar 100, que será multiplicado pela cotação que o usuário digitar.
2- A Switch execute de uma maneira de acordo com os casos executados pelo usuário. Nesse caso, a função executa de acordo com o tipo de investimento que o usuário escolher. Na constante novoMontante, será executada o caso Ações na Switch com o valor de 150. Então vai ser o valor 150 multiplicado por 1.1 que é a função executada nesse caso. Na constante segundoMontante, não será executado nada. Pois o tipo de investimento solicitado não existe. Então será exibido o alert com a mensagem do default da Switch.
3- Esse código cria uma variavel para percorrer uma array, e se o numero for par, envia para um array, se não for, envia para outro array. Comando que criou a variavel para percorrer array inicial dado pelo For Of, e para adicionar em pares e impares em arrays diferentes atraves do if e else. O primeiro concole log informará o tamanho da array. O segundo mostrará a array com números pares. E o terceiro mostrara a array com os números impares.
4- Esse código cria uma váriavel com o valor infinito. (maior valor que existe) e uma variavel com valor de 0. Cria uma váriavel para percorrer a array item por itemm, if (se) o numero for menor que o valor da rimeira váriavel, essa variavel terá o valor desse número. Assim até pegar o menor número dessa array. No fjnal a variavel 1 vai possuir o menor numero do arrray. O outro if faz o oposto, if (se) o número for maior que o valor da variavel 2 (0), a variavel 2 tera esse valor. No final, essa variavel terá como valor o maior item da array. Os concoles logs irão mostrar o menor e o maior item da array.


//Exercicios de Lógica de programação

/*Respostas
1- Podemos percorrer através do ForOf, através do For declarando uma variavel para percorrer a array (será demonstrado abaixo). E atraves do forEach. 
Ex ForOF:
for(let i of array){
    
}
Nesse código cria uma variavel e o comando of faz ela percorrer todo o array.
Ex For:

for(let i = 0; i<array.length; i++){

}
Nesse código criamos uma variavel que começa na posição 0 do array e enquanto ela for menor do que o cumprimento do array, ela vai avançando uma posição.
Ex forEach:

array.forEach((objeto, i, a)=>{

})
Esse código a função forEach lê todo o array e permite utilizarmos os itens dela.

2-
a)False
b)False
c)True
d)True
e)True

3- Este código não funciona. Ele esqueceu de dar um valor para variavel e de somar o numero 1 ao valor da variavel.*/

/*
4-
let ladoA = Number(prompt("Digite o valor do primeiro lado do seu triangulo"))
let ladoB = Number(prompt("Digite o valo do segundo lado do seu triangulo"))
let ladoC = Number(prompt("Digite o valo do terceiro lado do seu triangulo"))

let tipoTriangulo = (A, B, C)=>{
    if(A === B && B === C){
        alert("Seu triângulo é Equilátero")
    }else if(A === B || A === C || B == C){
        alert("Seu triângulo é Isósceles")
    }else{
        alert("Seu triângulo é Escaleno ")
    }
}

tipoTriangulo(ladoA, ladoB, ladoC)*/

/*
5-

let numUm = Number(prompt("Digite um número"))
let numDois = Number(prompt("Digite outro número"))

console.log(`Entrada: ${numUm} e ${numDois}`)

let diferenca = (primeiro, segundo)=>{
    if(primeiro > segundo){
        console.log(`O maior é ${primeiro}`)
    }else if(segundo > primeiro){
        console.log(`O maior é: ${segundo}`)
    }else{
        console.log("Os números são iguais")
    }
}

diferenca(numUm, numDois)

let divisiveis = (a, b)=>{
    if(a % b !== 0 && b % a !== 0){
        console.log("Esses números não são divisiveis")
    }else if(a % b !== 0){
        console.log(`${a} não é divisivel por ${b}`)
    }else if(b % a !== 0){
        console.log(`${b} não é divisivel por ${a}`)
    }
}

divisiveis(numUm, numDois)

let naoDivisiveis = (a, b)=>{
    if(a % b === 0){
        console.log(`${a} é divisivel por ${b}`)
    }else if(b % a === 0){
        console.log(`${b} é divisivel por ${a}`)
    }
}

naoDivisiveis(numUm, numDois)

let val = (um, dois)=>{
    if(um > dois){
        let valor = um - dois
        console.log(`A diferença entre eles é ${valor}`)
    }else if(dois > um){
        let valor = dois - um
        console.log(`A diferença entre eles é ${valor}`)
    }
}

val(numUm, numDois)*/