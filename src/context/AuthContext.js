import { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, signInWithRedirect,
    onAuthStateChanged,
    signOut,
    FacebookAuthProvider
} from 'firebase/auth';
import { auth } from '../firebase-config';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        if ((window.innerWidth > 1024)) {
            signInWithPopup(auth, provider);
        } else {
            signInWithRedirect(auth, provider);
        }

    };

    /* eslint-disable */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, signIn, googleSignIn, user, logOut, facebookSignIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}