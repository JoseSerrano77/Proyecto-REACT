import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponenteContenedor from './components/ComponenteContenedor/ComponenteContenedor'

// jsx -> js y xml -> html pero no es html  
// componente es: una función Comienza con mayúscula (función Constructora) <- elementos jsx 

// titulo y contactenos son componentes funcionales o de vista
// componentes de presentación 

// props : la manera de pasar datos de un comp padre a un comp hijo ´
// parámetros



//componente contenedor (encapsulan componentes func y otros contenedores)
// llamadas a las apis
function App() {
  const titluloApp = 'soy titulo de app' // estados = variables
  const saluddar = () => console.log('saludando') // estado
  

  return (
    <>
      <nav>
        <p>Nombre de la tienda</p>
        <p>remeras </p>
        <p>gorras</p>
      </nav>
      <ComponenteContenedor saludo='Hola home' />     
    </>
  )
}

export default App
//  Navbar - ItemListContainer(home)