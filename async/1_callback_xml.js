let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//1.Generamos el ENDPOINT
let endpoint = 'https://rickandmortyapi.com/api/character'

//1.0 Creamos la funcion de exito de la API
function exito(response) {
    console.log(JSON.parse(response))
}

//1.1 Creamos la funcion de falla de la API
function fallo(status) {
    console.log(status)
}

//1.2 Creamos la funcion que trae todo de la API
function get_data(endpoint, exito, fallo) {
    //2.Creamos el objeto de conexion de la API
    let http = new XMLHttpRequest()
    //3.Abrir conexion a la API
    http.open('get', endpoint)
    //4.Enviar la solicitud(REQUEST) a la API
    http.send()
    //5.Hacer el tratamiento de la Respuesta(RESPONSE)
    http.onload = function () {
        exito(http.responseText)
    }
}

//6.Invocar la funcion de GET_DATA
get_data(endpoint, exito, fallo)