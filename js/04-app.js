function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}.`
}

Cliente.prototype.retirarSaldo = function (retirar) {
    this.saldo -= retirar;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instancia
const arleth = new Persona('Arleth', 5000, 66163978);
console.log(arleth);
console.log(arleth.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de esta persona es ${this.telefono}.`
}

console.log(arleth.mostrarTelefono());