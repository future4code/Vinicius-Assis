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

// Exercicios de Funções

/*1-
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let fun = (array)=>{
    let a = Infinity
    let b = 0

    for(let i of array){
        if(i < a){
            a = i
        }
        if(i > b){
            b = i
        }
    }
    array = array.filter((e, i, arr)=>{
        return e !== a
    })
    array = array.filter((e, i, arr)=>{
        return e !== b
    })
    a = Infinity
    b = 0
    
    for(let i of array){
        if(i < a){
            a = i
        }
        if(i > b){
            b = i
        }
    }
    console.log(`O segundo menor é ${a} e o segundo maior é ${b}`)
}

fun(num)*/

/*2-

let nome = ()=>{
    alert("Hello Labenu")
}
nome()*/

//Exercicios de Objetos

/*1- Quando formos armazenar informações de um objeto ou quisermos reutilizar as propriedades de um objeto.*/

//2-
/*let lado1 = Number(prompt("")) 
let lado2 = Number(prompt("")) 

let criaRetangulo = (lUm, lDois)=>{
    return {
        Largura: lUm,
        Altura: lDois,
        Perimetro: (lUm + lDois) * 2,
        Area: lUm * lDois
    }
}
console.log(criaRetangulo(lado1, lado2))*/

//3-
/*let filme = {
    Titulo: "O Resgate do Soldade Ryan",
    Ano: 1998,
    Diretor: "Steven Spielberg",
    Atores: ["Tom Hanks", "Matt Damon", "Vin Diesel", "Adam Goldberg"]
}

console.log(`Venha assistir ao filme ${filme.Titulo}, de ${filme.Ano}, dirigido por ${filme.Diretor} e estrelado por ${filme.Atores}`)*/

//4-
/*let nome = prompt("Digite seu nome: ")
let idade = Number(prompt("Digite sua idade: "))
let email = prompt("Digite seu email")
let endereco = prompt("Digite seu endereço: ")

let person = {
    Nome: nome,
    Idade: idade,
    Email: email,
    Endereço: endereco
}

let anonimizarPessoa = ()=>{

   let novoObjeto ={
        ...person,
        Nome: "Anônimo"
    }
    return novoObjeto
}

console.log(anonimizarPessoa())*/

//Exercicios de Funções de Array

//1-
//a)
/*const pessoas =[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let retornaMaiores = (array)=>{
    array = array.filter((person, i, a)=>{
        return person.idade >= 20
    })
    return array
}
console.log(pessoas)*/

//b)
/*const pessoas =[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]


let retornaMaiores = (array)=>{
    array = array.filter((person, i, a)=>{
        return person.idade <= 20
    })
    return array
}
console.log(pessoas)*/

//2-
//a)
//const array = [1, 2, 3, 4, 5, 6]

/*let multi = array.map((num, i, a)=>{
    return num * 2
})

console.log(multi)*/

//b) 
/*let tri = array.map((num, i, a)=>{
    return num * 3
})

console.log(tri)*/

//c)
/*let parImpar = array.map((num, i, a)=>{
    if(num % 2 === 0){
        return `${num} é par`
    }else{
        return `${num} é impar`
    }
})

console.log(parImpar)*/
 //3-
 //a)
 /*const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let pode = pessoas.filter((persons, i, a)=>{
    return persons.idade >= 18 && persons.idade <= 60 && persons.altura >= 1.5
})

console.log(pode)*/

//b)
/*const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let naoPode = pessoas.filter((persons, i, a)=>{
    return persons.idade <= 18 || persons.idade >= 60 || persons.altura <= 1.5
})

console.log(naoPode)*/

//4-

/*const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let naoCanceladas = consultas.filter((e, i, a)=>{
    if(e.cancelada === false && e.genero === "masculino"){
       console.log(`Olá, Sr ${e.nome}. Estamos enviando esta mensagem para
        lembrá-lo da sua consulta no dia ${e.dataDaConsulta}. Por favor, acuse
        o recebimento deste e-mail.`)
    }else if(e.cancelada === false && e.genero === "feminino"){
        console.log(`Olá, Sra ${e.nome}. Estamos enviando esta mensagem para
        lembrá-la da sua consulta no dia ${e.dataDaConsulta}. Por favor, acuse
        o recebimento deste e-mail.`)
    }else if(e.cancelada === true && e.genero === "masculino"){
        console.log(`Olá, Sr.${e.nome}. Infelizmente, sua consulta marcada
        para o dia ${e.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    }else if(e.cancelada === true && e.genero === "feminino"){
        console.log(`Olá, Sra. ${e.nome}. Infelizmente, sua consulta marcada
        para o dia ${e.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    }
})*/

//5-
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

let funcao = ()=>{
    let atualizacao = contas.forEach((e, i, a)=>{
        let y = 0
        for(let i of e.compras){
            y += i
        }
        e.saldoTotal = e.saldoTotal - y
        y = 0
    })
    return contas
}
console.log(funcao(contas))
