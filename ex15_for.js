const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: "))

for (let contador = num; contador >=1; contador--){
    console.log(contador)
}