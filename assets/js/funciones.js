function saludar(nombre){
    console.log(arguments);
    console.log('Hola1 ' + nombre);
    return [1, 2, 3, 4];
    // Esto nunca se va ejecutar
    console.log('Soy un codigo que esta despues del return');

}

const retorDeSaludar = saludar('Jorge', 40 , true, 'Guatemala');

console.log(retorDeSaludar);


//funcion anonima

const saludar2 = function(){
console.log ('Hola mundo');

}

const saludarFlecha = ( ) =>{

    console.log('Hola Flecha ');

}

const saludarFlecha2 = ( nombre) =>{

    console.log('Hola Flecha ' + nombre );

}

saludar2();

saludarFlecha('Jorge');

function sumar(a, b){

    return a + b;
    
}

const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();

}

const  getAleatorio2 = () => Math.random();


console.log ('Aleatorio flecha', getAleatorio2());

