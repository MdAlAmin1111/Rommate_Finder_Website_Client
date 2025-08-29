import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {
    const {userInfo, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <Loader></Loader>
    }
    if(userInfo){
       return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;