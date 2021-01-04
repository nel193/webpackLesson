import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader.js'
console.log(data)
function App(){
    const [loaderList, setLoaderList] = useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return(
        <div>
                Que linda aplicación hecha en ReactJs
            <ul>
                {
                    loaderList.map((item)=>{
                        <Loader data={item} key={item.id} />
                    })
                }
            </ul>
            <button onClick={handleClick}>Mostrar loaders</button>
        </div>
    )
}

export default App