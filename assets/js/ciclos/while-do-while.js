const carros = ['Ford', 'Mazda','Honda','Toyota'];

let i = 0;

while (i < carros.length) {

    if (i===1) {
        i++;
        continue;
    }
 
    console.log (carros[i]);
    i++;
}

// undefined
// null 
// false

console.warn('Do while');

let j = 1;

do {
    console.log(carros[j]);
    j++;

} while (carros[j]);