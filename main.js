function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.mostrarInformacoes = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    };
}

function Carro(marca, modelo, tipoDeCombustivel) {
    Veiculo.call(this, marca, modelo);
    this.tipoDeCombustivel = tipoDeCombustivel;

    this.mostrarInformacoes = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo de Combustível: ${this.tipoDeCombustivel}`);
    };
}

function Bicicleta(marca, modelo, tipoDeFreio) {
    Veiculo.call(this, marca, modelo);
    this.tipoDeFreio = tipoDeFreio;

    this.mostrarInformacoes = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo de Freio: ${this.tipoDeFreio}`);
    };
}

const meuCarro = new Carro('Toyota', 'Corolla', 'Gasolina');
const minhaBicicleta = new Bicicleta('Caloi', 'Aro 26', 'Sola do tênis');

meuCarro.mostrarInformacoes();
minhaBicicleta.mostrarInformacoes();