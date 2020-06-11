const limpar = ()=>{
    let valor = document.getElementById("input-val")
    let descricao = document.getElementById("input-descri")
    let select = document.getElementById("despesas")

    let value = valor.value
    let descri = descricao.value
    let tipo = select.value

    valor.value = ""
    descricao.value = ""
    select.value = ""
}

let info = []
const cadastrar = ()=>{
    let valor = document.getElementById("input-val")
    let descricao = document.getElementById("input-descri")
    let select = document.getElementById("despesas")

    let val = valor.value
    let descri = descricao.value
    let tipo = select.value

    let despesa = {
        Valor: val,
        Descrição: descri,
        Tipo: tipo
    }

    console.log(despesa)

     limpar()
}