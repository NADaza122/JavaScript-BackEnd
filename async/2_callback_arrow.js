let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//1.Generamos el ENDPOINT
let endpoint = 'https://restcountries.com/v3.1/all'

//1.0 Creamos la funcion de exito de la API
const exito= (response) =>{
    console.log(JSON.parse(response))
}

//1.1 Creamos la funcion de falla de la API
const fallo=(status) =>{
    console.log(status)
}

//1.2 Creamos la funcion que trae todo de la API
const get_data = (endpoint, exito, fallo) => {
    //2.Creamos el objeto de conexion de la API
    let http = new XMLHttpRequest()
    //3.Abrir conexion a la API
    http.open('get', endpoint)
    //4.Enviar la solicitud(REQUEST) a la API
    http.send()
    //5.Hacer el tratamiento de la Respuesta(RESPONSE)
    http.onload = () =>{
    if(http.status === 200 ){
        exito(http.responseText)
    }else{
        fallo(http.status)
    }
  }
}

//6.Invocar la funcion de GET_DATA
get_data(endpoint, exito, fallo)