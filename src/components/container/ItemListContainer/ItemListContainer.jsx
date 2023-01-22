// hook es una función 
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'
// import { gFetch } from '../../../utils/gFetch'
import ItemList from '../ItemList/ItemList'


export const ItemListContainer  = ( {saludo} ) => {  
    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(()=>{
        if (categoryId) {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    // throw new Error('Error generado a la fuerza')            
                   setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
            
        } else {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    // throw new Error('Error generado a la fuerza')            
                   setProductos(respuestaPromesa)
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
        }
    }, [categoryId])
    
    
    console.log(categoryId) 
    // [1,2,3,4,5] -> map -> [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>]
    return (
        <div className='container'> 
            <h2>Envío Gratis desde $9999 solo CABA y zonas* de GBA + 3 cuotas sin interés: {saludo}</h2> 
            
            {   loading 
                ? 
                    <center>
                        <h1>Cargando...</h1>
                    </center>
                :
                
                    <ItemList productos={productos} />
            }
        </div>
    )
}



