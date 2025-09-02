import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/Listings/AddListing";
import BrowseListing from "../pages/Listings/BrowseListing";
import Loader from "../components/Loader";
import MyListing from "../pages/Listings/MyListing";
import ListingDetails from "../pages/Listings/ListingDetails";
import UpdateMyListing from "../pages/Listings/UpdateMyListing";

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
                element: <BrowseListing></BrowseListing>,
                loader: () => fetch('https://rommate-finder-website-server.vercel.app/api/listings'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/listing-details/:id',
                element: <PrivateRoute>
                    <ListingDetails></ListingDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://rommate-finder-website-server.vercel.app/api/listings/id/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>

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
                    <MyListing></MyListing>
                </PrivateRoute>
            },
            {
                path: '/update-my-listing/:id',
                element: <PrivateRoute>
                    <UpdateMyListing></UpdateMyListing>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://rommate-finder-website-server.vercel.app/api/listings/id/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])