// Escreva uma função que usa 2 números e retorna o maior entre eles

//Função Altera Valor

function MaiorNumero(numero1, numero2) {
    if (numero1 > numero2){
        return console.log(`O maior número é: ${numero1} `)
    }
    else if (numero2 > numero1){
        return console.log(`O maior número é: ${numero2} `)
    }else{
        console.log('Os números são iguais!');
    }
    
}

MaiorNumero(50,25)
MaiorNumero(6,87)
MaiorNumero(96,96)




