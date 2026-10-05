const prompt = require('prompt-sync')();

const pinCorrecto = "0607";


let intento = prompt('Escribe tu PIN: ');


while (intento !== pinCorrecto) {
  
  console.log('PIN incorrecto. Intenta de nuevo.');
  intento = prompt('Escribe tu PIN: ');
}


console.log('¡Bienvenido a Nequi!');