const prompt = require('prompt-sync')();

let opcion;


do {

  console.log('\n--- MENÚ NEQUI ---');
  console.log('1) Ver saldo');
  console.log('2) Enviar dinero');
  console.log('3) Recargar');
  console.log('4) Salir');
  
  opcion = prompt('Elige una opción: ');


  if (opcion === '1') {
    console.log('Tu saldo actual es $150.000');
  } else if (opcion === '2') {
    console.log('Has elegido Enviar dinero.');
  } else if (opcion === '3') {
    console.log('Has elegido Recargar.');
  } else if (opcion === '4') {
    console.log('Gracias por usar Nequi. ¡Hasta luego!');
  } else {
    console.log('Opción no válida, intenta de nuevo.');
  }


} while (opcion !== '4');