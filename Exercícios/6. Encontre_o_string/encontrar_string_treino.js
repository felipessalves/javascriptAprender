// criar um metódo para ler propriedades de um objeto
// exibir somente as propriedades do tipo string que estão nesse objeto

const jogo = {
    nome: 'Red Dead Redemption 2',
    dataDelançamento: 2018,
    empresa: 'Rockstar Games',
    preço: 350
}

console.log(jogo['nome']) // Acessar o valor da propriedade

exibirPropriedades(jogo)

function exibirPropriedades(obj){
    for (prop in obj){
        if (typeof obj[prop] === "string"){
            console.log(prop/*key(chave)*/, obj[prop]/*value(valor)*/ )
        }
    }
}