import { useEffect, useState } from "react"




export const Message = () => { //Componente mensaje exportado a SinpleForm
    const [ubicacion, setUbicacion] = useState({x:0,y:0})//useState nos ayudara a obtner los valores con un objeto otorgandolos
  useEffect(()=>{// hook que si es verdadero el cambio  ejecutara el evento mousemove

    const onEventMouse = ({x, y}) =>{ //->desestruicturacion de nuestro evento, valores X y Y
        setUbicacion({x,y}) //-> nuestra funcion toma los valores y los pasa a ubicacion, parametro de UseState
    }

    window.addEventListener('mousemove', onEventMouse); //ejecucion de nuestro evento Mouse

    return()=>{
        window.removeEventListener('mousemove', onEventMouse)// -> Desmonta nuestra evento si ya no exixte el usuario correspondido
    }
  },[ubicacion])// solo una vez 

  return (
  <>
  <h3>El usuairo ya existe</h3>
  {JSON.stringify(ubicacion)} {/* cambiamos nuestro a objeto Json a string para agregarlos dentro de nuestro componenete */}
  </>
  )
}


