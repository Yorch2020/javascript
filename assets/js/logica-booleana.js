const regresaTrue=() => {
    console.log('Regresa true');
    return true;
}

const regresaFalse=() => {
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negacion');
console.log (true); //true
console.log (!true); //false
console.log (!false); //true

console.log (!regresaFalse());

console.log (true && true );
console.log (true && false);

console.log('1.==========');
console.log(regresaFalse() && regresaTrue()); // false
console.log( regresaTrue() && !regresaFalse()); // false


console.log('2.====&&====');

regresaFalse() && regresaTrue();

console.log ('4 Condiciones', true && true && true && false);

console.warn('OR'); // true

console.log(true || false);
 console.log (regresaTrue() || regresaFalse);

 console.warn('Asignaciones');


const soyUndefined= undefined;
const soyNull = null;
const soyFalso= false;


const a1= false && 'Hola mundo' && 150; //?
const a2 ='Hola ' && 'Mundo' && soyFalso;
const a3 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({a1, a2, a3, a4, a5 });

if (true || true || true || false ){
    console.log('Hacer algo');

}else {

    console.log ('Hacer otra cosa');

}
