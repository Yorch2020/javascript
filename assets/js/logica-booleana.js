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


