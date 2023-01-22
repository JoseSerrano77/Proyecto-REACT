import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";


 
export const ControlledInput = () => {
    const [dataForm, setDataForm] = useState( {email: '', nombre: '' } );    

    const handleOnChange = (e) =>{           

        console.log(e.target.name)
        console.log(e.target.value)
    }

    console.log(dataForm)
    return (
        <>
            <input
                type="text"
                name='email'
                value={dataForm.email}
                onInput={handleOnChange} /// addEventListener('evento', fn)
                placeholder="mail"
            /><br></br>
            <input
                type="text"
                name='nombre'
                value={dataForm.nombre}
                onChange={handleOnChange}
                placeholder="nombre"
            />
           
        </>
    );
  };










const Loading  = () =>  {
    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('Desmontado el loading')
        }
    })
    
    console.log('renderizo loading')
    return <h2>Cargando ...</h2>
}
  
export  function LoadingComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 5000)        
    }, []);


    
    return <>
        { loading ? <Loading /> : <h3>Productos cargardos!</h3>}
    </>;
  }











  
export  function TextComponent({ user = true, children  }) {    
    
    if (!user) {        
        return <h1> Ud no puede ver este componente</h1>
    }

  
    return (
        <>      
            <h2>Ud esta logueado puede ver la pág.</h2>
              {children}     
        </>
    )
  }








//   condicion ? :  => if else ,    condicion && => if   ,    condicion ||  or


export  function TextComponent2({ condition = true }) {

    // Llamado context 
    return (
        <>
            <button className="btn btn-outline-danger">Para todos</button>

            {condition && <button className="btn btn-outline-danger">Admin</button>}

            {!condition && <button className="btn btn-outline-primary" >No admin</button>}

        </>
    );
  }

// condicion ? :(si no), condición && accion si, condicion  || acciones







export  function TextComponent3({ condition = true }) {

    return (
        <>
            <h2> { condition ? 'Hay Stock' : 'No Hay stock'} </h2>   
            {/* condition ? <h2>texto</h2>: <h3>otro texto</h3>                      */}
        </>
    )
}









 export function TextComponent4({ condition = false }) {
    const estiloComponent4 = { color: condition ? "green" : "red" }

    return (
        <>
            <h2 style={ estiloComponent4  }>
                Stock
            </h2>
        </>
    );
  }













  
export  function TextComponent5({ stock = 0 }) {


    return (
        <>
            <h2 className={ (stock !== 0) ? "alert alert-success" : "alert alert-danger" }>
                stock
            </h2>
        </>
    );
}

















export  function TextComponent6( { condition = true, otro}  ) {
    return (
        <>
            <h2
                className={ `${condition === true ? "alert alert-success" : "alert alert-danger"} ${otro || ""} `}
            >
                Ud esta logueado puede ver la pág.
            </h2>
        </>
    );
}












export function TextComponent7({ condition = false , otro = "mt-5" }) {
    
    
    const props = condition ?
            {
                className: `alert alert-success ${otro || ""}`,
                style: {color: 'red'},
                title: "Este es el titulo si la condicion es verdadera",
                nombre: 'Fede'
            }
        : 
            {
                className: `alert alert-warning ${otro || ""}`,
                style: {color: 'green'},
            }

            
    
      return (
        <>    
            {/* className= btn btn-success style=   */}
            <h2 {...props} >Ud esta logueado puede ver la pág.</h2>
        </>
    )
  }