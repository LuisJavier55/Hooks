import { useEffect,useState } from "react"

//objeto creado llamado localCache para almacenar peticiones
const localCache = {};

            //custom Hook ->useFetch
export const useFetch = (urljsx) => {//pedimos desde nuestro MultiplecustomHook la url de la api 
    //parametros que vamos enviar por defecto a nuestro componente
   const [fetch_js, setFetch_js] = useState({
    data:null,
    isLoading:true,
    hasError: false,
    error: null,
   })
  
  
   //useEffect nos correra en la primera renderizacion 
   useEffect(()=>{
    conexionApi();
   },[urljsx]) //peticion fect cuando el url cambie

   const setLoadingState = () =>{
   setFetch_js( {//hace cambio en nuestro estado
        data:null,
        isLoading:true,
        hasError: false,
        error: null
    })
   }


//    conexion api
   const conexionApi = async() => {

    //condision para verificar, si tiene un valor dentro, dejar al mismo estado si es que estan los mismo valores 
    if(localCache[urljsx]){
        console.log('Usando Cache');
        setFetch_js({
            data:localCache[urljsx],
            isLoading:false,
            hasError:false,
            error:null
        });
        return;
    }

    setLoadingState(); // cargara primero el el estado de carga 
    //sleep
    await new Promise(resolv => setTimeout(resolv,1500));// nos dara un tiempo estimado para la ejecucion del fetch 

    const url  = urljsx;
    const resp = await fetch(url);
// si nuestra respuesta tiene un error 
    if(!resp.ok){
        setFetch_js({//hace cambio en nuestro estado
                data:null,
                isLoading:false,
                hasError: true,
                error: {
                    code:resp.status,
                    message:resp.statusText
                },
        });
        return;
    }
    


    //  sino ocurre un error entonces extraemos nustra respuesta en data como un Json 
    const data = await resp.json();
        // De nuevo hacemos cambio de estado 
        setFetch_js({
            data:data,
            isLoading:false,
            hasError:false,
            error:null
        })

        //llenar datos con nuestras peticiones https
        localCache[urljsx] = data;


    // console.log({data});
  


   }
  
  //lo que devolvera nuestro CustomHook -> enviamos 
    return {
        data: fetch_js.data,
        isLoading:fetch_js.isLoading,
        hasError:fetch_js.hasError,
        error:fetch_js.error
    }
}

