import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    //custom Hoook useFetch
    const {data,isLoading,hasError,error}= useFetch();


  return (
    <>
    <h2>Pockemon</h2>
    <hr />

    {(isLoading)&& "Cargando..."}

    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}

    <h2>{data?.name}</h2>
    </>
  )
}





