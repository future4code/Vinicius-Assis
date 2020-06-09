function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

  const array = [5, 5, 1]
  console.log(metodo(array))

  //R= Nome melhor seria operações. Ela soma todos os itens da minha array e soma com o valor do meu resultado a, e após faz o mesmo porém multiplicando com o inicial do resultado b.