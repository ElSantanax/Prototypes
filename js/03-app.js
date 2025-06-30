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

// Instancia
const jose = new Cliente('José', 6000);
console.log(jose.tipoCliente());
console.log(jose.nombreClienteSaldo());
jose.retirarSaldo(1000);
console.log(jose.nombreClienteSaldo());
console.log(jose);
