
import { createBrowserRouter } from "react-router-dom";
import Name from "../Component/Name";
import Chat from "../Component/Chat.jsx";
import App from'../App.jsx'
import Name2 from "../Component/Name2";
import Login from "../Component/Login.jsx";
      const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Name",
    element: <Name/>,
  },
  {
    path: "/Chat",
    element: <Chat/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }, {
    path: "/Name2",
    element: <Name2/>,
  },
  
]);
  

export default router
