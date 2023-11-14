//Receber uma quantidade de valores para avaliar 
// função exibe se cada valor é ímpar ou par

exibirTipo(25)

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0){
            console.log(`${i} "PAR"`)
        }
        else{
            console.log(`${i} "ÍMPAR"`)
        }
    } 
}


/* 

i = 10 < limite = 10 


*/

