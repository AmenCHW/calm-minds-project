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
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase-config';

const UserContext = createContext();
const TherapistContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [therapist, setTherapist] = useState({})

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
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)

                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            }
        )
    }

    const createTherapist = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)

                try {
                    const docRef = await setDoc(doc(db, "Therapists", `${result.user.uid}`), {
                        userId: `${result.user.uid}`
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            }
        )
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentTherapist) => {
            setTherapist(currentTherapist);
            console.log('Therapist', currentTherapist)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (

        <TherapistContext.Provider value={{ createTherapist, therapist }} >
            <UserContext.Provider value={{ createUser, signIn, googleSignIn, user, logOut, facebookSignIn }}>
                {children}
            </UserContext.Provider>
        </TherapistContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}


export const TherapistAuth = () => {
    return useContext(TherapistContext)
}