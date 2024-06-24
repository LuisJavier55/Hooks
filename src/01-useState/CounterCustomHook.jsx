import { useCounterValores } from "../hooks/01-useCounter"


export const CounterCustomHook = () => {
//nuestro custom hook yamado desde el return y sus parametros                                       
    const {hookcontador, setHookContador, restaHookContador,sumaHookContador,resetHookContador} = useCounterValores()


  return (
    <>
    <h1>Counter con Hook : {hookcontador}</h1>

    <hr />
{/* funcion que retorna un valor hacia nuestro hook  */}
    <button className="btn btn-primary" onClick={ ()=>sumaHookContador(2) }>+1</button>
    <button className="btn btn-primary" onClick={resetHookContador}>reset</button>
    <button className="btn btn-primary" onClick={()=>restaHookContador(2) }>-1</button>



    </>
  )
}




