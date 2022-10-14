//LIBRERIA AXIOS CON AWAIT

const axios = require('axios')

let config = {
    method:'get',
    url: "https://pokeapi.co/api/v2/type"
}

//FUNCION AWAIT
const f = async () => {
    try {
        let response = await axios(config)
        response.data.results.forEach(element => {
            console.log('°°°°°°°°°°°°°°°°°°°°°°')
            console.log(' ')
            console.log(`Tipo: ${element.name}`)
        });
    } catch(error){
        console.error(error)
    }
  }
  
f()