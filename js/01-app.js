const cliente = {
    nombre: 'José',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

// Otra forma
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const usuario = new Cliente('José', 500);
console.log(usuario);
