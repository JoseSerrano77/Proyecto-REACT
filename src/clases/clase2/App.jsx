import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0); 
 

  // sugar Syntax - fachera - simplificar - más legible - más ordenado - entendible

  // let i = 0
  // i  = i + 1  -> sugar syntax -> i++ - ++i - i+= 1;  
  // lenguage evoluciona  ; python 

  // ej:  class Persona {} moldes para crear -> objetos 

  // ej: 

  // const condicion = false
  // let resultado = ''
  // if (condicion) {
  //   resultado = 'Verdadero'
  // } else {
  //   resultado = 'Falso'
  // }

  // if(condition) else -> condicion ?  : - condicion && acction - condicion || accion

  // console.log(`El resultado es ${condicion ? 'verdadero' : 'falso' }. todo bien `)

 
 // spread operator  ...
  // Array, obj

  // const array = [  2,3,4,5  ]

  // let uno = 1

  // const newArray = [ ...array, uno ] // push

  // console.log(newArray)

  // propiedades dinamicas
// let campo = 'id'


//   const objPersona = {
//     nombre: 'Fede',
//     apellido: 'Osandon',   
//     [ campo + '_persona' ]: 35,
//     dni: 2222222
//   }

  
  // deep maching
  
  // const persona = objPersona.nombre
  // const apellido = objPersona.apellido

  // asignación en destructuración
  // const { nombre : firstName , apellido: lastName, dni = 11111} = objPersona
  
  
  
  // console.log(dni)

  // fetch() map - foreach

  // pollify
  // for(let i = 0; i<12; i++){
  //   //acciones 
  //   let array = []
  //   array.push()
  //   return array
  // }

  // webpack -> create-react-app -- vite -> esbiuld

  // transpiling
 
 
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
            <input type= 'text' placeholder='ingresar nombre' />  
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fede el mejor </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
