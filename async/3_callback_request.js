const request = require('request')

let endpoint = 'https://pokeapi.co/api/v2/type'

const r = request(endpoint , {json: true} , function(err , response , data ){
    data.results.forEach(hi => {
        console.log(`************************`)
        console.log(`Tipo: ${hi.name}`)  
        console.log(` `)
    });

    console.log(data)
})

