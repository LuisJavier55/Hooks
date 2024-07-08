import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { SinpleForm } from './02-useEffect/SinpleForm'
// import { FormConCustomHook } from './02-useEffect/FormConCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterCustomHook /> */}
    {/* <SinpleForm /> */}
    {/* <FormConCustomHook />      */}
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
