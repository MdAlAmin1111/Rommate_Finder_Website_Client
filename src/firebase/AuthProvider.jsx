import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    // Authentication related tasks
    const createUser = (email, password) => {
        console.log("createUser function has been called in AuthProvider with ", email, 'and', password);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogout = () => {
        return signOut(auth);
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
        setUserInfo,
        userLogout

    };
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;