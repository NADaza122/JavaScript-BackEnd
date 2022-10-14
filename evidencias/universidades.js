//LIBRERIA AXIOS

const axios = require('axios')

let config = {
    method:'get',
    url: "https://restcountries.com/v3.1/all"
}

const f = async () =>{
        try{
            let response = await axios(config)
            response.data.forEach(pais => {
                console.log('++++++++++++++++++++++')
                console.log(' ')
                console.log(`Tipo: ${ pais.name.common}`)
            })
        } catch(error){
            console.error(error)
        }
    }
f()
      