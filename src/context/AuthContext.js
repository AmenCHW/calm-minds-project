import { createContext, useContext} from 'react';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase-config';

// ,signOut, onAuthStateChanged,

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    /* eslint-disable */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <UserContext.Provider value={{createUser, signIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}