import {memo} from 'react'  //? DUDAS CON MEMO  INVESTIGAR 
export const SmallMemo = memo(({valor}) => {
    console.log('se hace efecto :C');
  return (
    <small>
        {valor}
    </small>
  )
})


