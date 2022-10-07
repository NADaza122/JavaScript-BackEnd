//DEPENDENCIA COLORS//
let colors = require('colors');

/*const estudiante = {
    Id: "1", 
    Nombre: 'Nicolas',
    Apellido: 'Daza',
    Identificacion: "10318037465",
}*/

//ARREGLO
/*const dinastia = [ "Fallon" , "Liam" , "Blake", "Crystal" ]*/
const g1=[
    "Laura",
    "Sofia",
    "Mafe"
]
const g2=[
    "Duvan",
    "Carlos",
    "Fabio"
]
const g3=[
    ...g1,
    "Sofia",
    ...g2,
    "Carlos"
]

const estudiante = {
    Id: "1", 
    Nombre: 'Nicolas',
    Apellido: 'Daza',
    Identificacion: "10318037465",
    Amigos:  g3
}




//DESECTRUTURACION ESTUDIANTE
/*let { Nombre, Identificacion}= estudiante*/
//DESECTRUCUTRACION ARREGLOS
/*let [ F , L , B , C ]= dinastia*/



/*console.log(estudiante.Id.rainbow)
console.log(estudiante.Nombre.rainbow)
console.log(estudiante.Apellido.rainbow)
console.log(estudiante.Identificacion.rainbow)*/

//Arreglo Prueba
/*console.log(F.bgBrightWhite,L.bgBrightGreen,B.bgBrightCyan,C.bgBrightMagenta)*/
console.log(estudiante)
