import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    // Authentication related tasks
    const createUser = (email, password) => {
        console.log("createUser function has been called in AuthProvider with ", email, 'and', password);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // auth change observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
            console.log(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        createUser,
        userInfo,
        setUserInfo

    };
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;