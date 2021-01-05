/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 * 
 * 
 * Entra a un sitio web, para consultar si esta abierto hoy...
 */

const dia =0; // 0: domingo , 1: Lunes
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

if (dia === 0 || dia ===6){
    console.log ('Fin de semana');
    horaApertura = 9;
    } else {
        console.log ('Dia de semana');
        horaApertura = 11;


    } 


    console.log ({horaApertura});

