import { useState } from "react"


export const useForm = (valorInicial = {}) => {// "valorInicial" = a objeto que se envia por useForm de "FROMCONCUSTOMHOOK"
    const [estado, setEstado] = useState(valorInicial) // valor a llamar "estado" y ValorInicial = {}
     

      const onEventEstado = ({ target }) =>{ //funcion a llamar "onEventEstado"
        setEstado({  
          ...estado,  
          [target.name]:target.value,  
        })
      }

      const onBorrarDatos = () =>{//funcion borrar 
        /*  
        setEstado({
          //1.Manera de vaciar los calores de mis input 
            username:'',
            email:'',
            password:'',

        })
      }*/
      
      //2.Manera de dejar los parametros vaicios
      setEstado(valorInicial);
    }
  return {
    ...estado,// spread nos ayuda a obtner nuestros paramatros del objeto, el cual se obtiene con "valorInicial", el cual es un objeto que se envia por "useForm"
    estado,
    onEventEstado,
    onBorrarDatos
  }
}





