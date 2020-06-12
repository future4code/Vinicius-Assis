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

const limpFil = ()=>{
    let valueMin = document.getElementById("input-ValMin")
    let valueMax = document.getElementById("input-ValMax")
    let selection = document.getElementById("tipo-despesas")

    valueMin.value = ""
    valueMax.value = ""
    selection.value = ""

    //valMin.value = ""
    //valMax.value = ""
    //type.value = ""
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

    infoDespesas.forEach((despesas, i, a)=>{
        informations.innerHTML += `<p>Valor:  ${despesas.Valor}</p> <p>Descrição: ${despesas.Descrição}</p> <p>Tipo:  ${despesas.Tipo}</p>`
    })

    //console.log(despesa)
    
    console.log(infoDespesas)

     limpar()
}

/*const filtro = ()=>{
    infoDespesas.filter((tipo, i, a)=>{
        if(selection.value === "casa"){
            informations.innerHTML += `${}`
        }
    })
}*/