import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import autos from './data/autos.js'
import AutoView from './views/AutoView.jsx'


const routes = [
    {
      path: '/',
      element: <App />
    }
  ]

  autos.forEach( auto => {
    const {url, model} = auto
    routes.push(
      {
        path: url,
        element: <AutoView auto={auto} />
      }
    )
    console.log(routes)
  })

const router = createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={(router)} />
  </React.StrictMode>,
)
