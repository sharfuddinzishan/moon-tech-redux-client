import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Cart from "../pages/Main/Cart/Cart";
import Features from "../pages/Main/Features/Features";
import Home from "../pages/Main/Home/Home";
import Main from "../layout/Main/Main";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])

export default routes;