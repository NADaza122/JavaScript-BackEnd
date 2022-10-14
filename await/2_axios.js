//LIBRERIA AXIOS CON AWAIT

const axios = require('axios')

let config = {
    method:'get',
    url: "https://pokeapi.co/api/v2/type"
}

axios(config)
     .then((response)=>{
        //MANERA SENCILLA
        //console.log(response.data.results)

        //MANERA DE RECORRER POR FOREACH
        /*response.data.results.forEach(element => {
            console.log('||||||||||||||||||||')
            console.log(' ')
            console.log(`Tipo: ${element.name}`)*/

        //MANERA POR THENS
        return response.data.results
        })
        .then((data)=>{
            data.forEach(element => {
                console.log('++++++++++++++++++++++')
                console.log(' ')
                console.log(`Tipo: ${element.name}`)
            });
        })
        .catch((error)=>{
        console.error((error))
     })
      