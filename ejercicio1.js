const movimientos = [50000, -20000, 120000, -35000, -15000, 80000];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
    total += movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros++;
    }
}

console.log("--- Resumen del Mes (Nequi) ---");
console.log("Total del saldo acumulado: $" + total);
console.log("Cantidad de retiros realizados: " + cantidadRetiros);