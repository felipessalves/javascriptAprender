// Factory functions - Funcções de Fábrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo Ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000)
console.log(celular1)


function criarOrcamentoComputador(preco_placaMae, preco_processador, preco_memoriaRAM){
    return {
        preco_placaMae,
        preco_processador,
        preco_memoriaRAM,
        preco_total : function() {
            let total = preco_placaMae + preco_processador + preco_memoriaRAM
            console.log(`O orçamento ficou em ${total} reais!`)
        } 
    }
}


const orcamento1 = criarOrcamentoComputador(800, 1250, 350)

orcamento1.preco_total()
