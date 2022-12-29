import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

setTimeout(() =>  {ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) }, 0); //TIME DE CARREGAMENTO DO LOADING
