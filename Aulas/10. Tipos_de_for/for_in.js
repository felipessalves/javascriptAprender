//for-in

const pessoa = {
    nome: 'Felipe',
    idade: '18'
};

for(let chave in pessoa ){
    console.log(chave, pessoa['nome'])
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores){
    console.log(cores[indice])
}

