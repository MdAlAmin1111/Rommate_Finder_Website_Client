import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    // Authentication related tasks
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle =()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const userLogout = () => {
        return signOut(auth);
    }

    // auth change observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        userInfo,
        setUserInfo,
        createUser,
        loginUser,
        loginWithGoogle,
        userLogout

    };
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;