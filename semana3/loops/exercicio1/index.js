let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
//R= O resultado que está aparecendo é de 105. A váriavel 1 está com o valor inicial de 0, mas está sendo somado 1 numero enquanto esse número for menor que 15. Porém, cada vez q é somado, o valor de i é somado ao valor de sum. Então quando i chega no ultimo valo menor que 15, ou seja, 14, o valor de sum está "sum += 1, 2, 3, 4, 5,...." até  14. E a soma desses números da 105.