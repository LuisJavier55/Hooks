import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { SinpleForm } from './02-useEffect/SinpleForm'
// import { FormConCustomHook } from './02-useEffect/FormConCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
import './index.css'
import { Memorize } from './06-memos/Memorize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterCustomHook /> */}
    {/* <SinpleForm /> */}
    {/* <FormConCustomHook />      */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    <Memorize/>


  </React.StrictMode>,
)
