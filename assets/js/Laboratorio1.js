const diasSemana = ['Domingo','Lunes', 'Martes', 'Miercoles','Jueves','Viernes', 'Sabado'];

const diasSemana2 = {

    0: 'Domingo',
    1: ' Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'

}



let dia = 3;
console.log(diasSemana[3]);
const hoy= new Date();

dia2 = hoy.getDay();

console.log (diasSemana2[dia2]);
