import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
import { SinpleForm } from './02-useEffect/SinpleForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterCustomHook /> */}
    <SinpleForm />
  </React.StrictMode>,
)
