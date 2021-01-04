import '../css/index.css'
import search from './search.js'
import render from './render.js'

const id = prompt ('Quien es ese Pokemon')

search(id)
    .then((data)=>{
        render(data)
    })
    .catch(()=>{
        console.log('Fallo el Pokemon')
    })