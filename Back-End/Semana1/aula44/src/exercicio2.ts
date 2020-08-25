/*a*/ 
type tipo= {
    numeros: array,
    soma: number,

}
function obterEstatisticas(numeros) {
    

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//R= A entrada é "numeros" e a saida é "estatisticas"

/*b*/
//R= 