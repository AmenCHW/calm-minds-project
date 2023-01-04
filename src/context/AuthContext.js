import { createContext, useContext} from 'react';
import {
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase-config';

// ,signInWithEmailAndPassword,signOut, onAuthStateChanged,

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    /* eslint-disable */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <UserContext.Provider value={{createUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}