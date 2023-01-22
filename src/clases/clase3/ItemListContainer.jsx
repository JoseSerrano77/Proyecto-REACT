// hook es una función 
import { useState, useEffect } from 'react'


export const ItemListContainer  = ( {saludo} ) => {
     // estado - función para cambiar el estado
    const [contador, setContador] = useState(0) // hook // 1 sola vez 
    const [boolean, setBoolean] = useState(false)

    // muchos estado 
    // no tiene que haber creación de estdos dentro de alguna condición o estructrua de datos


    useEffect(()=>{
        // acciones después del rendering
        console.log('window.addEventListener')

        return ()=>{
            console.log('window.removeEventListener')

        }
    })

    // useEffect(()=>{
    //     console.log('llamada a la api 2')
    // }, [])

    // useEffect(()=>{
    //     console.log('cambio de booleann')
    // }, [boolean])

    // js imparativo - ejecución tipo cascada
    
    // console.log(estado)
    const manejoContador = () => {
        // contador= contador + 1
        // contador ++
        //  contador += 1
        setContador( contador + 1 ) //- 0 + 1 - 1 + 1    
        
    }
    const manejoBoolean = () => {
        // contador= contador + 1
        // contador ++
        //  contador += 1
        setBoolean( !boolean ) //- 0 + 1 - 1 + 1    
        
    }
    console.log('antes del renderin de ItemListContainer 3')
    
    
    return (
        <div> 
            <h2>Renderizado 4</h2>
            <p>Click: {contador} </p>  
            <button onClick={manejoContador}>Sumar</button>            
            <button onClick={manejoBoolean}>boolean</button>            
        </div>
    )
}

// Reglas no bloquear el rendering de un componente

// props
// estados
// cilco de vida (comporta el componente): 
    // la primer vez que se ejecuta componente (ILC) - primer render - Montado del componente
    // desde el segundo render -> llama: re render o actualización

// 3 cosas que disparan un nuevo render (re render)
// 1 - un evento
// 2 - cambio en un estado
// 3 - cambio en una prop



