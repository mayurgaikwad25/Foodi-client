import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
//import Menu from "/public/menu";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>,   
        },
     /*   {
          path: "menu/:id",
          element: <Menu/>,   
        }, */
        {
          path: "/menu",
          element: <Menu/>,   
        }
      ]
    },
  ]);
  export default router; 