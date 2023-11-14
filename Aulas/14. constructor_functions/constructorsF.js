function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...")
    }
}

const celular = new Celular('asus', 5.5, 5000)
console.log(celular)

function EstadoCapital(estado, capital){
    this.estado = estado
    this.capital = capital
    this.informar = function() {
        console.log(`O estado é ${estado} e a capital seria ${capital}`)
    }
}

const mg = new EstadoCapital('Minas Gerais', 'Belo horizonte')
mg.informar()