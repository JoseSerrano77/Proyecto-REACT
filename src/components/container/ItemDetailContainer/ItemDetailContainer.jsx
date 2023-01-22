import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = ({saludo}) => {
    const [producto , setProducto] = useState ({})
    const {detaliId} = useParams()
     console.log(detaliId)

     useEffect (() => {
        gFetch(detaliId)
        .then(resp => setProducto(resp))
     },[])
    return (
        <div className='container'> 
        <h2> {saludo}</h2>
        <ItemDetail producto={producto}/>
       
        </div>
    )
}

export default ItemDetailContainer