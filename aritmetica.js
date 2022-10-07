//IMPORTANDO COMMON JS//
import {sumar, restar, multiplicar, dividir, raiz} from './operaciones.js'

//MANERA TRADICIONAL DE LA FUNCIONES//

/*const a = 10;

const b = 30;

function sumar(a ,b){
    console.log(`La suma de los números es: ${a + b}`) 
}

sumar(a ,b );*/

//MANERA CON IDENTIFICADOR DE LA FUNCIONES (COMPONETES FUNCIONALES)//
/*const a = 10;

const b = 30;

const sumar = function sumar(a ,b){
    console.log(`La suma de los números es: ${a + b}`) 
}

sumar(a ,b );*/

//MANERA SINTAXIS FLECHA DE LA FUNCIONES//
/*const a = 10;

const b = 30;

const sumar = (a ,b)=> {
    console.log(`La suma de los números es: ${a + b}`) 
}

sumar(a ,b );*/

//MANERA SINTAXIS FLECHA DE LA FUNCIONES SIN CORCHETES//
/*const a = 10;

const b = 30;

const sumar = (a ,b)=> console.log(`La suma de los números es: ${a + b}`) 

sumar(a ,b );*/

//MANERA SINTAXIS FLECHA DE LA FUNCIONES CAMBIANDO LA ESTRUCTURA//
/*const a = 10;

const b = 30;

const sumar = (a ,b)=> {
    return a +b 
}

console.log(`La suma de los números es: ${a + b}`)*/

//MANERA SINTAXIS FLECHA DE LA FUNCIONES CAMBIANDO LA ESTRUCTURA Y SIN CORCHETES//
const a = 80;

const b = 100;

console.log(`La suma de los números es: ${ sumar(a , b) } `)
