import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './routes/custom-routes.jsx'
import React from 'react'
import { UserContextProvider } from './context/userContext/UserContextProvider.jsx'
// normal
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// with router
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
