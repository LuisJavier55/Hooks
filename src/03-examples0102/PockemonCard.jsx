import { useLayoutEffect, useRef, useState } from "react"



export const PockemonCard = ({id,name,sprites={}}) => {

  const divRef = useRef();
  const [tamaño, setTamaño] = useState({height:0,width:0})//asignamos objeto con valores inicial 

  useLayoutEffect(()=>{
   const {height, width} = divRef.current.getBoundingClientRect()  //*getBoundingClientRect nos da las medidas de cada una de las imagenes 

   setTamaño({height, width})//enviamos valores tomados desde nuestro current

  },[sprites]) //se ejecuta antes del renderizado o despues del cambio del sprite



  return (
    <>
    <section style={{height:200}}>
        <h2 className="text-capitalize">#{id} - {name}</h2>

{/* Imagenes */}
        <div ref={divRef}>
          {
            sprites.map(spri => (
              <img key={spri} src={spri} alt={spri} />
            ))
          }
        </div>
        <code>Imagen tamaño: {JSON.stringify(tamaño)}</code>
    </section>
    
    </>
  )
}





