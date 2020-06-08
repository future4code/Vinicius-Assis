const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

let resultado = minhaFuncao(8)
console.log(resultado)

//a) O resultado será udeffined. "[]"
//b) (6) [0, 1, 0, 1, 2, 3]
//C) (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
// MT feliz por ter conseguido entender oq aconteceu hahaha =), demorou 2 horas mas tá ok kkkkkkkkkkk. 


