import { useState } from "react"


export const SinpleForm = () => {

  const [estado, setEstado] = useState({
    name: "username",
    email: "Luis@google.com",
  })
//desestructurar el estado 
  const {name, email} = estado

//funcion del evento onchage la cual envia el evento y ese evento desestructura un 
  const onEventEstado = ({target}) =>{
    console.log(target);
    console.log(target.value);


  }

  return (
    <>
    <h1>Simple Form</h1>

    <hr />


    <input type="text"
    className="form-control"
    placeholder="username"
    name="username"
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




