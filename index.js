//Let: variables e identifiicadores simple:
//number
//strings
//booleans

// let lenguaje="PHP"

//Const: Funciones, arreglos y objetos

//template string
// console.log("Proyecto Nicolas 1 ${lenguaje}")



import { materias } from "./materias.js";
import pkg from 'colors'

/*console.log(materias);*/

//METODOS DE ARREGLOS
//FOREACH:
/*materias.forEach((materia)=>{
    if(materia.Tipo ==='Tranversal'){
    console.log(`Materia: ${materia.Id}`.bgMagenta)
    console.log(`Materia: ${materia.Instructor}`.bgMagenta)
    console.log(`Materia: ${materia.Nombre}`.bgMagenta)
    console.log(`Materia: ${materia.Notas}`.bgMagenta)
    }
})*/

//MAP: CONSTRUE UN ARREGLO CON BASE A OTRO
/*const profesores = materias.map((materia)=>{
    return materia.Instructor
})

console.log(profesores)

//FIND: ENCONTRAR LA PRIMERA OCUERRENCIA (ELEMENTO) QUE CUMPLA EL CRITERIO DADO
const PHP = materias.find((materia)=>{
    return materia.Instructor === "Fernado Galindo"
})

console.log(PHP)*/

//FILTER:
/*const PHP = materias.filter((materia)=>{
    return materia.Instructor === "Fernado Galindo"
})

console.log(PHP)*/

//PUSH: AGREGAR UN ELEMENTO A UN ARREGLO
/*materias.push({
        Id: 3,
        Nombre: "Bases De Datos",
        Instructor: "Fernando Galindo",
        Tipo: "Tecníca",
        Notas: [
            80,
            75,
            80
        ]
    }
)

console.log(materias)*/

//SPLICE: ELIMINAR
/*const removed = materias.splice()

console.log(removed)*/

//FINDINDEX: ACTUALIZAR
