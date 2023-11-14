// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let asterisco = '';
    for(let linha = 0; linha < linhas; linha++){
        console.log(asterisco += '*')
    }
}