import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Deatails from "../pages/Deatails";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [

        {
            path: '/',
            element: <Home></Home>,
            // loader: () => fetch("../../public/gadgets.json"),
            // children: [
            //     {
            //         path: "/gadgets/:id",
            //         element: <GadgetsDetails/>
            //     }
            // ]
        },
        {
            path: 'GadgetsSection/:product_id',
            element: <Deatails></Deatails>,
            loader: () => fetch('/gadgets.json')
        },
        {
            path: './Dashboard',
            element: <Dashboard></Dashboard>,
        },
        {
            path: '/Deatails',
            element: <Deatails></Deatails>
        }

      ]
    },
  ])


export default routes

  