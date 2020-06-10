let enviaEnter = (e)=>{
    if(e.key === "Enter"){
        capturaInput()
    }
}

let capturaInput = ()=>{
    let titulo = document.getElementById("input-titulo")
    let autor = document.getElementById("input-autor")
    let conteudo = document.getElementById("input-conteudo")
    let elemento = document.getElementById("conteudo-post")

    let tituloPost = titulo.value
    let autorPost = autor.value
    let conteudoPost = conteudo.value

    let post = {
    titulo: tituloPost,
    autor:  autorPost,
    conteudo:  conteudoPost
    }
    let exibirPosts = ()=>{
        if((conteudoPost.includes(".jpeg")) || (conteudoPost.includes(".jpg")) || (conteudoPost.includes("png"))){
        
            elemento.innerHTML += `<img src="${conteudo.value}">`
        }else{
            elemento.innerHTML += `<p>${conteudo.value}</p>`
        }
    }

    exibirPosts()

    let array = []

    array.push(post)

    console.log(array)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}