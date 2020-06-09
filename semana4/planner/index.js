let cronograma = ()=>{
  let input = document.getElementById("input")
  let tarefa = input.value

  let dia = document.getElementById("dias")
  let day = dia.value

  if( day === "segunda"){
    let segunda = document.getElementById("tab-segunda")
  segunda.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if( day === "terca"){
    let terca = document.getElementById("tab-terca")
  terca.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if( day === "quarta"){
    let quarta = document.getElementById("tab-quarta")
  quarta.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if( day === "quinta"){
    let quinta = document.getElementById("tab-quinta")
  quinta.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if( day === "sexta"){
    let sexta = document.getElementById("tab-sexta")
  sexta.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if(day === "sabado"){
    let sabado = document.getElementById("tab-sabado")
  sabado.innerHTML += `<li>${tarefa}</li>`
  input.value= ""
  }else if(day === "domingo"){
    let domingo = document.getElementById("tab-domingo")
    domingo.innerHTML += `<li>${tarefa}</li>`
    input.value= ""
  }
}