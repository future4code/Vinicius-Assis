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

let infoDespesas = []
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
    if((val === "") || (val <= 0) || (descri === "")){
        alert("Todos os campos devem estar preenchidos ou com algum valor. Verifique os dados preenchidos.")
    } else if(tipo === ""){
        alert("Selecione uma opção de tipo de despesa")
    }else{
        infoDespesas.push(despesa)
    }

    let informations = document.getElementById("informations")
    informations.innerHTML = `<p>${despesas}</p>`

    //console.log(despesa)
    
    console.log(infoDespesas)

     limpar()
}