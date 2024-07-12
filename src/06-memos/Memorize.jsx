import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { SmallMemo } from "./SmallMemo"


export const Memorize = () => {
  const {hookcontador,sumaHookContador} = useCounter(10)
  const [mostrar, setMostrar] = useState(true)
  return (
    <>
    <h1>Contador: <SmallMemo valor={hookcontador}/> </h1>

    <hr />

    <button
    className="btn btn-primary"
    onClick={() =>sumaHookContador(1)}
    >+1</button>

    <button
    className="btn btn-outline-primary"
    onClick={() => setMostrar(!mostrar)}>
      Show/Hide{JSON.stringify(mostrar)}
    </button>
    </>
  )
}







