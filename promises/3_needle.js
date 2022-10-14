//LIBRERIA NEEDLE

const needle = require('needle')

let url = 'https://rickandmortyapi.com/api/character'

needle('get' , url)
.then((response)=>{
    return response.body.results
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