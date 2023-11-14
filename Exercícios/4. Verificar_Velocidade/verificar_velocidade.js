// Velocidade Máxima de até 70
// A cada 5km/h acima do limite você ganha 1 ponto
// Math.Floor() - arredondar para o decimal mais próximo
// caso os pontos sejam maiores que 12 -> a carteira é suspendida

verificarVelocidade(80);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const KmPorPonto = 5
    if ( velocidade <= velocidadeMaxima)
        console.log('ok') 
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto))
        if (pontos >= 12){
            console.log('Sua carteira foi suspendida!')
        }else{
            console.log(`Pontos: ${pontos}`)
        }   
    }
}

//Alternativa

/* 
verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    let pontos = 0
    if (velocidade <= velocidadeMaxima){
        console.log('ok') 
    }
    else {
        for (let i = 75; i <= velocidade; i++) {
            i = i + 5
            pontos = pontos + 1
        }
        if (pontos >= 12){
            console.log('Sua carteira foi suspendida!')
        }else{
            console.log(`Pontos: ${pontos}`)
        }
    }   
}

*/

    

