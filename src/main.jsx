import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rout from './Routing/Rout.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rout} />
  </StrictMode>,
)
