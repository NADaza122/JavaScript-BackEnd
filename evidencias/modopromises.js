//EVIDENCIA METODO PROMISES SIMPLE

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//1.Generamos el ENDPOINT
let endpoint = 'https://emojihub.herokuapp.com/api/random'

//MODO ASINCRONO
//1.0 Creamos la funcion de exito de la API
//CAMPO ESPECIFICO DEL TIPO(NOMBRE)
const exito= (response) =>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log('------------------------')
        console.log(' ')
        console.log(`Tipo: ${tipo.name}`)
    })
    //TODOS LOS CAMPOS DEL TIPO
    //console.log(JSON.parse(response))
}

//1.1 Creamos la funcion de falla de la API
const fallo=(status) =>{
    console.log(status)
}

//1.2 Creamos la funcion que trae todo de la API
const get_data = (endpoint) => {
    //DEFINIR UNA PROMESA PARA LA CONEXION A LA API
    let promise = new Promise( (resolve , reject) => {
        //2.Creamos el objeto de conexion de la API(XMLhttp)
        let http = new XMLHttpRequest()
        //3.Abrir conexion a la API
        http.open('GET', endpoint)
        //4.Enviar la solicitud(REQUEST) a la API
        http.send()
        //5.Hacer el tratamiento de la Respuesta(result)
        http.onload = () =>{
            if(http.status === 200 ){
                resolve(http.responseText)
            }else{
                reject(http.status)
            }
        }
    })
    return(promise)
}

//6.Invocar la funcion de GET_DATA
get_data(endpoint)
        //exito
        .then((response)=> {
            exito(response)
        })
        //error
        .catch((status)=>{
            fallo(status)
        })