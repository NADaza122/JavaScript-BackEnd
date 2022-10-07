function   llamarAlumno(alumno , callback ){
    let LlamadaAlumno = `Llamado al alumno: ${alumno}`

    //EJECUCION FUNCION CALLBACK
    callback(LlamadaAlumno)
}

//DEFINICION FUNCION CALLBACK
/*function imprimir(texto){
    console.log(texto)
}
*/




//INVOCACION FUNCION PRINCIPAL LLAMARALUMNO
/*llamarAlumno("Nicolás Daza" , imprimir)*/