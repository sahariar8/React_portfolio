import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './layout/LayOut.jsx'
import Error from './components/Error.jsx'
import Home from './pages/home/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut></LayOut>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
