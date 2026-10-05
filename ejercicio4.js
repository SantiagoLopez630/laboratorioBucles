const movimientos = [
  { tipo: 'recarga', monto: 0 },
  { tipo: 'transferencia', monto: 20000 },
  { tipo: 'pago_comercio', monto: 0 },
  { tipo: 'pago_comercio', monto: 35000 },
  { tipo: 'pago_comercio', monto: 12000 },
  { tipo: 'transferencia', monto: 50000 }
];

let posicionEncontrada = -1;


for (let i = 0; i < movimientos.length; i++) {
  const movimiento = movimientos[i];

  
  if (movimiento.monto === 0) {
    console.log(`Posición ${i}: Movimiento de $0 ignorado.`);
    continue; 
  }


  if (movimiento.tipo === 'pago_comercio') {
    posicionEncontrada = i;
    console.log(`¡Primer pago a comercio encontrado en la posición ${posicionEncontrada}! (Monto: $${movimiento.monto})`);
    break; 
  }
}