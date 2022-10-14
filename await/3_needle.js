//LIBRERIA NEEDLE

const needle = require('needle')

let endpoint = 'https://pokeapi.co/api/v2/type';

//FUNCION AWAIT CON NEEDLE
const f = async () => {
    try {
        let response = await needle('get', endpoint)
        response.body.results.forEach((tipo) => {
            console.log('°°°°°°°°°°°°°°°°°°°°°°')
            console.log(' ')
            console.log(`Tipo: ${tipo.name}`)
        });
    } catch(error){
        console.error(error)
    }
  }
  
f()