import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Gamer from './gamer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gamer />
    <App />
  </StrictMode>,
)
