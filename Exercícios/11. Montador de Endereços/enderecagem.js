// Objeto Endereço

// Criar um objeto endereço que contém
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

const endereco = {
    Rua : 'Alberto Salgado',
    Cidade : 'Curupinha',
    CEP : '12301-00',
    exibirEndereco: function(){
        return `Rua ${endereco.Rua}, Cidade ${endereco.Cidade}, CEP ${endereco.CEP}` 
    }
}

console.log(endereco.exibirEndereco())


let endereco1 = {
    rua: 'Alberto Salgado',
    cidade: 'Curupinha',
    cep: '12301-00'
};

function exibirEndereco(endereco1) {
    for (let chave in endereco1)
        console.log(chave, endereco1[chave])
}

exibirEndereco(endereco1)