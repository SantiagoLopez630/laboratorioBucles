const usuarios = [
  {
    nombre: "Laura",
    movimientos: [12000, 35000, 5000]
  },
  {
    nombre: "Carlos",
    movimientos: [50000, 20000]
  },
  {
    nombre: "Sofia",
    movimientos: [100000, 15000, 45000]
  }
];


for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];

  
  let totalUsuario = 0;

  
  for (let j = 0; j < usuario.movimientos.length; j++) {
    totalUsuario += usuario.movimientos[j];
  }

  console.log(`El total gastado por ${usuario.nombre} es: $${totalUsuario}`);
}