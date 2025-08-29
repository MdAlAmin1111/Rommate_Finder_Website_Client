import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/Listings/AddListing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/browse-listing',
                element: <h1>browse listing</h1>
            },
            {
                path: '/add-to-find-roommate',
                element: <PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>
            },
            {
                path: '/my-listing',
                element: <PrivateRoute>
                    <h1>my listing</h1>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])