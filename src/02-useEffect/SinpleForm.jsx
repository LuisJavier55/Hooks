import { useState } from "react"


export const SinpleForm = () => {

  const [estado, setEstado] = useState({
    username: "",
    email: "",
  })
//desestructurar el estado 
  const {username, email} = estado

//funcion del evento onchage la cual envia el evento y ese evento desestructura un 
  const onEventEstado = ({ target }) =>{

    console.log(target);// evento mas target, el cual nos trae el input 

    const {name, value} = target; //desestructuracion de target trayendo los atrubutos de nuestra etiqueta

    setEstado({ //funcion en el cual trae nuestro estado actual 
      ...estado, //spread operation trae todo el contenido de nuestro objeto 
      [name]:value, // si hay un cambio, en las etiquetas=atributos se cambia tanto username o email y valores de name y value se integran   
    })
//esto nos ayuda a hacer un cambio cuando nuestro estado cambie(inputo), con los OnEventEstado y lo integra a un nuevo objeto.
//el espread operation que tenemos es dinamico, si hay mas valorezs, se integraran por defecto en nuestro cambio de estado.


   
  }

  return (
    <>
    <h1>Simple Form</h1>

    <hr />


    <input type="text"
    className="form-control"
    placeholder="Username"
    name="username" // el username esta vinculado con el de nuestro objeto useState = el cual si nosotros ponemos mal uno el input no funcionara
    value={username}
    //funcion que se envia como prop
    onChange={onEventEstado} />
    
    
    <input type="email"
    className="form-control mt-2"
    placeholder="correo@"
    name="email"
    value={email}
    onChange={onEventEstado} />
    
    </>
  )
}




