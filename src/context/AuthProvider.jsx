import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase'

const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    console.log(user);
    // create user with email password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with email and password
    const signInEmailPassword = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign in with social media
    const SignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    // update User Profile
    const userProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    // Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loader,
        auth,
        SignIn,
        setLoader,
        logOut,
        createUser,
        userProfile,
        signInEmailPassword
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;