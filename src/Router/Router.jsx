import { createBrowserRouter } from "react-router-dom";
import RouterLayout from "../Layout/RouterLayout";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path:"/",
        Component:RouterLayout,
        children:[
            {
               index:true,
               Component:Home
            }
        ]
    }
])