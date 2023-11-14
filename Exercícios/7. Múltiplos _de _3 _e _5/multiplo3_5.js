//Criar função somar que retorna a
//soma de todos os múltiplos de 3 e 5

// Multiplos de 3
// 3, 6, 9
// Multiplos de 5
// 5, 10

// Somando os multiplos
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

somar(9)

function somar(limite) {
    let somaM3 = 0; let somaM5 = 0
    for (let i = 0; i <= limite; i++){
        //multiplos de 3
        if (i % 3 === 0) {
            somaM3 += i
        }
        //multiplos de 5
        if (i % 5 === 0) {
            somaM5 += i
        }
    }
    total = somaM3 + somaM5
    console.log(`A soma de todos os multiplos de 3 e 5 é: ${total}`)

}