const casa = {
    quarto1 : 'João',
    quarto2 : 'Zack',
    cozinha: {
        geladeira : 'Electrolux',
        microondas : 'Consul',
        fogão: 'Consul'
    },
    limparMoveis: function(){
        console.log('Movéis limpos!')
    }
}

const objetoEx2 = {...casa}
const objetoEx3 = Object.assign({
    banheiro: {
        pia : 'pia com torneira',
        chuveiro: 'Chuveiro Donizetti'
    }
},  casa)
console.log(objetoEx3)