import { useRef, useState } from "react"


export const FocusScreen = () => {
const [state, setState] = useState('')
const focusjalar = useRef();

 
const OnSeleccion =()=>{

    focusjalar.current.select();


}


  return (
    <>
    <h1>Focus Screen</h1>
    <hr />

    <input 
    ref={focusjalar}
    type="text" 
    placeholder="Ingrese nombre"
    className="form-control"
    />

    <button onClick={OnSeleccion}>seleccionar</button>
    </>

  )
}


