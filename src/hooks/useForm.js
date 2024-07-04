import { useState } from "react"


export const useForm = (valorInicial = {}) => {// "valorInicial" = a objeto que se envia por useForm de "FROMCONCUSTOMHOOK"
    const [estado, setEstado] = useState(valorInicial) // valor a llamar "estado" y ValorInicial = {}
     

      const onEventEstado = ({ target }) =>{ //funcion a llamar "onEventEstado"
        setEstado({  
          ...estado,  
          [target.name]:target.value,  
        })
      }

      const onBorrarDatos = () =>{
        setEstado({
            // username:'',
            // email:'',
            // password:'',

        })
      }

  return {
    ...estado,// spread nos ayuda a obtner nuestros paramatros del objeto, el cual se obtiene con "valorInicial", el cual es un objeto que se envia por "useForm"
    estado,
    onEventEstado,
    onBorrarDatos
  }
}





