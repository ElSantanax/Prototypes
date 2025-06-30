function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const usuario = new Cliente('José', 500);

// Cliente
function formatearCliente(cliente) {
    const { nombre, saldo } = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}$`
}

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa
    return `El cliente ${nombre} tiene un saldo de ${saldo}$ y pertenece a la catergoría de ${categoria}`
}

console.log(formatearCliente(usuario));

// Empresa
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const tradePass = new Empresa('TradePass', 5000, 'Tecnología')
console.log(formatearEmpresa(tradePass));
