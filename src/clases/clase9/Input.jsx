import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {   

    const inputHandler = (event)=>{
        event.stopPropagation()
        // event.preventDefault()
        console.log(event.key)     
    }

    return (
        <div className="box" >
            <div className="border border-1 border-warning w-50" >
                <input 
                    className="m-5" 
                    // onKeyDown={ inputHandler } 
                    onClick={  inputHandler } 
                    type="text" 
                    name="nombre" 
                    id="i"
                />
            </div>
        </div>
    )
}
