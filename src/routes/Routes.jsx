import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GadgetsDetails from "../pages/Deatails";
 // Correct spelling here

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/gadgets-section/:product_id',
                element: <GadgetsDetails />,
                loader: async () => {
                    const response = await fetch('../../public/gadgets.json');
                    const data = await response.json();
                    return data;  
                },
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            }
        ],
    },
]);

export default routes;
