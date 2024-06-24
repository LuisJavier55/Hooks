import { useCallback, useState } from "react"


export const ComponentApp = () => {
    const [state,setConter] = useState ({
        primerContendero: 30,
        segundoContenedor:50,
        tercerContenedor:80,
        });


        const {primerContendero,segundoContenedor,tercerContenedor} = state;

  return (
   <>
    <h1>Contenedor1: {primerContendero}</h1>
    <h1>Contenedor2: {segundoContenedor}</h1>
    <h1>Contenedor3: {tercerContenedor}</h1>



    <hr />

    <button className="btn" onClick={
        ()=>setConter({
            ...state,
            primerContendero:primerContendero + 1,
        })
    } >+1</button>

    <button className="btn" onClick={
        ()=>setConter({
            ...state,
            segundoContenedor:segundoContenedor - 1,
        })
    }>-1</button>

   </>
  )
}



