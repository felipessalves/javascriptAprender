let a = 'vermelho'
let b = 'azul'

console.log('O valor original da variável a é: ',a)
console.log('O valor original da variável b é: ',b)

let aux = a
a = b
b = aux

console.log('O valor trocado da variável a é: ',a)
console.log('O valor trocado da variável b é: ',b)
