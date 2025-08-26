import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/browse-listing',
                element: <h1>browse listing</h1>
            },
            {
                path: '/add-to-find-roommate',
                element: <h1>add to find roommate</h1>
            },
            {
                path: '/my-listing',
                element: <h1>my listing</h1>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    },
    {
        path: '*',
        element:<Signup></Signup>
    }
])