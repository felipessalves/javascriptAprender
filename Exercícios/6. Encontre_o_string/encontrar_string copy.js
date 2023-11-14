const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    empresa: 'Marvel', 
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (let prop in obj){
        if (typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }
    }