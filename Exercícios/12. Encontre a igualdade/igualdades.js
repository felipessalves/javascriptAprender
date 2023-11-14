// Igualdade de objetos

// Criar dois objetos e comparar se são iguais em propriedade e endereço de memória
function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('e','f','g');

        
function saoIguais(endereco1, endereco2) {
    if (endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep){
        return 'São iguais'
    }
    else{
        return 'São diferentes'
    }

}

console.log(saoIguais(endereco1,endereco2))

function EnderecoMemoriaIguais(endereco1,endereco2){
    // comparando se a referência do objeto aponta para o mesmo local na memória
    if (endereco1 === endereco2){
            return 'Mesmo endereço de memória'
        }
        else{
            return 'Endereço de memória diferente!'
        }
    
} 

console.log(EnderecoMemoriaIguais(endereco1,endereco2))