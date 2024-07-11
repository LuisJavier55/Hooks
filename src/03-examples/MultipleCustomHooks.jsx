import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingMenssage } from "./LoadingMenssage";
import { PockemonCard } from "./PockemonCard";


export const MultipleCustomHooks = () => {

  const {hookcontador,sumaHookContador,restaHookContador} = useCounter(1)
  //custom Hoook useFetch
    const {data,isLoading,hasError,error}= useFetch(`https://pokeapi.co/api/v2/pokemon/${hookcontador}`);


  return (
    <>
    <h2>Pockemon</h2>
    <hr />

    {
    (isLoading)
    ? 
    <LoadingMenssage/>
    : 
    <PockemonCard 
    id={hookcontador} 
    name={data.name}
    sprites={[
      data.sprites.front_shiny
    ]}
    />
    }
    
      
    
    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}

    

    <button 
    className="btn btn-primary"
    onClick={()=>hookcontador>1?restaHookContador(1): null}
    >Aterior</button>

    <button 
    className="btn btn-primary" 
    onClick={()=> sumaHookContador(1)}
    >Siguiente</button>

  <p>{hookcontador}</p>

    </>
  )
}





