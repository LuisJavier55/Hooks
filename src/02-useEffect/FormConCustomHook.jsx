import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"



export const FormConCustomHook = () => {

 const {estado, onEventEstado, username, email, password,onBorrarDatos} = useForm({
  //objeto que se envia al "valorInicial" como paramtro en nuestro customHook
  username:'',
  email:'',
  password:''
 })

 

  return (
    <>
    <h1>Simple Form</h1>

    <hr />


    <input type="text"
    className="form-control"
    placeholder="Username"
    name="username"// el username esta vinculado con el de nuestro objeto useState = el cual si nosotros ponemos mal uno el input no funcionara
    value={username}
    //funcion que se envia como prop
    onChange={onEventEstado} />
    
    
    <input type="email"
    className="form-control mt-2"
    placeholder="correo@"
    name="email"
    value={email}
    onChange={onEventEstado} />

<input type="password"
    className="form-control mt-2"
    placeholder="contraseña"
    name="password"
    value={password}
    onChange={onEventEstado} />

   <button onClick={onBorrarDatos} className="btn btn-primary">Borrar</button>
    
    </>

  )
 
}



