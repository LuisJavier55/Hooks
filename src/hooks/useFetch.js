import { useEffect,useState } from "react"


            //custom Hook ->useFetch
export const useFetch = () => {
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
   },[])

//    conexion api
   const conexionApi = async() => {

    //sleep
    await new Promise(resolv => setTimeout(resolv,2000));

    const url  =  'https://pokeapi.co/api/v2/pokemon/ditto';
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


    console.log({data});
  


   }
  
  //lo que devolvera nuestro CustomHook -> enviamos 
    return {
        data: fetch_js.data,
        isLoading:fetch_js.isLoading,
        hasError:fetch_js.hasError,
        error:fetch_js.error
    }
}

 
