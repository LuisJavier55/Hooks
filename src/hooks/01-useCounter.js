import { useState } from "react"

// exportamo y inicimos hook (funcion)
export const useCounterValores = (valorInicial = 40) =>{
// useState de valro
    const [hookcontador, setHookContador] = useState(valorInicial);

    const sumaHookContador = (value) =>{
        setHookContador(hookcontador + value)
    }
    const resetHookContador = () =>{
        setHookContador(valorInicial)
    }

    const restaHookContador = (value) =>{
        if(hookcontador === 0)return;
        setHookContador(hookcontador - value)
    }


//envia lo paramtros en un hook para consumir 
    return {
        hookcontador,
        sumaHookContador,
        resetHookContador,
        restaHookContador,
    }

}


