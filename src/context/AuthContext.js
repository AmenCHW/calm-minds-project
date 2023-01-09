import { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, signInWithRedirect,
    onAuthStateChanged,
    signOut
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
            signInWithPopup(auth, provider).then(
                async (result) => {
                    /* eslint-disable */
                    console.log("google sign in result", result)

                    try {
                        const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,

                        });
                        /* eslint-disable */
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        /* eslint-disable */
                        console.error("Error adding document: ", e);
                    }

                }
            )
                ;
        } else {
            signInWithRedirect(auth, provider).then(
                async (result) => {
                    /* eslint-disable */
                    console.log("google sign in result", result)

                    try {
                        const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,

                        });
                        /* eslint-disable */
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        /* eslint-disable */
                        console.error("Error adding document: ", e);
                    }

                }
            )
                ;
        }

    };

    /* eslint-disable */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)

                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`,
                        fullname: `${result.user.displayName}`,
                        email,
                        isTherapist: false,
                    });
                    // console.log("Document written with ID: ", docRef.id);
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
                        userId: `${result.user.uid}`,
                        fullname: `${result.user.displayName}`,
                        email,
                        isTherapist: true,
                    });
                    // console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            }
        )
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log('User', currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentTherapist) => {
            setTherapist(currentTherapist);
            // console.log('Therapist', currentTherapist)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <TherapistContext.Provider value={{ createTherapist, therapist }} >
            <UserContext.Provider value={{ createUser, signIn, googleSignIn, user, logOut }}>
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