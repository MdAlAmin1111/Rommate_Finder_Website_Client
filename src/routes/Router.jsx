import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

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
    }
])