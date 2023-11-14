// Criar função para mostrar os números primos

// Primos
// Compostos

//Ex: 10, 11
//10 (1 ou por ele mesmo)
//10 - 1,2,4,6,10
//11 - 1,11
/* 
let primo = 0

if (10 % limite === 0){
    divisível = > 2 //não é primo primo
    divisível = 2 //primo
    divisível = 1 // não é primo
}
*/


exibirNumerosPrimos(100);

function exibirNumerosPrimos(limite){
    let divisível = 0
    for(let i = 2; i <= limite; i++){
        //limite = 15; i = 2
        for(let j = i; j <= i && j !== 0; j--){
            if (i % j  === 0){
                divisível += 1
            }            
        }
        if (divisível === 2){
            console.log(`${i}`)    
            divisível = 0
        }else{
            divisível = 0
        }
}
}

/* 
Outra forma de resolver

exibirNumerosPrimos(35);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let éPrimo = true
        for(let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                éPrimo += false
                break
            }            
        }
        if (ehPrimo) console.log(numero)
}
}
*/