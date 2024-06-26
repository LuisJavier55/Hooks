import { useState } from "react"


export const SinpleForm = () => {

  const [estado, setEstado] = useState({
    name: "Luis",
    email: "Luis@google.com",
  })
//desestructurar el estado 
  const {name, email} = estado

//funcion del evento onchage la cual envia el evento y ese evento desestructura un 
  const onEventEstado = ({target}) =>{
    const {name, value} = target; //desestructuramos en tagert con el fin de extraer su numbre y valor del evento onchange 
    
    setEstado({
      ...estado,
      [ name ]:value
    });

  }

  return (
    <>
    <h1>Simple Form</h1>

    <hr />


    <input type="text"
    className="form-control"
    placeholder="Username"
    name="name"
    value={name}
    //funcion que se envia como prop
    onChange={onEventEstado} />
    
    
    <input type="email"
    className="form-control mt-2"
    placeholder="Luis@hotmail.com"
    name="email"
    value={email}
    onChange={onEventEstado} />
    
    </>
  )
}




