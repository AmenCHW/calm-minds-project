import React, { createContext, useContext, useState, useEffect } from 'react';
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
        provider.addScope('email');
        if ((window.innerWidth > 1024)) {
            signInWithPopup(auth, provider).then(
                async (result) => {
                    try {
                        await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.providerData[0].email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,
                            IDURL: "",
                            gender: '',
                            birthDate: 1111-11-11,
                            educationLevel: "",
                            hobbies: "",
                            familySize: 1,
                            phonenumber: 123,
                            book_an_appointment: {},

                        });
                    } catch (e) {
                        alert("Error Occured")
                    }

                }
            )
                ;
        } else {
            signInWithRedirect(auth, provider).then(
                async (result) => {
                    try {
                       await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.providerData[0].email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,
                            IDURL: "",
                            gender: '',
                            birthDate: 1111-11-11,
                            educationLevel: "",
                            hobbies: "",
                            familySize: 1,
                            phonenumber: 123,
                            book_an_appointment: {},

                        });
                    } catch (e) {
                        alert("Error Occured")
                    }

                }
            )
                ;
        }

    };

    /* eslint-disable */
    const createUser = (email, password, fullName, birthDate) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`,
                        email,
                        isTherapist: false,
                        IDURL: "",
                        gender: '',
                        fullName: fullName,
                        birthDate: birthDate,
                        photoURL: '',
                        educationLevel: "",
                        hobbies: "",
                        familySize: 1,
                        phonenumber: 123,
                        book_an_appointment: {},

                    });
                } catch (e) {
                    alert("Error Occured")
                }

            }
        )
    }

    const createTherapist = (email, password, username, city, licensenumber) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`,
                        fullname: " ",
                        bio: " ",
                        birthDate: 1111-11-11,
                        phonenumber: 123,
                        email,
                        isTherapist: true,
                        username: username,
                        city: city,
                        licensenumber: licensenumber
                    });     
                } catch (e) {
                    alert("Error Occured")
                }

            }
        )
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        if ((window.innerWidth > 1024)) {
            signInWithPopup(auth, provider).then(
                async (result) => {
                    try {
                        const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.providerData[0].email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,
                            userId: `${result.user.uid}`,
                            IDURL: "",
                            gender: '',
                            birthDate: 1111-11-11,
                            educationLevel: "",
                            hobbies: "",
                            familySize: 1,
                            phonenumber: 123,
                            book_an_appointment: {},
                        });
                    } catch (e) {
                        alert("Error Occured")
                    }

                }
            )
                ;
        } else {
            signInWithRedirect(auth, provider).then(
                async (result) => {
                    try {
                        const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                            userId: `${result.user.uid}`,
                            fullname: `${result.user.displayName}`,
                            email: `${result.user.providerData[0].email}`,
                            photoURL: `${result.user.photoURL}`,
                            isTherapist: false,
                            userId: `${result.user.uid}`,
                            IDURL: "",
                            gender: '',
                            birthDate: 1111-11-11,
                            educationLevel: "",
                            hobbies: "",
                            familySize: 1,
                            phonenumber: 123,
                            book_an_appointment: {},

                        });
                    } catch (e) {
                        alert("Error Occured")
                    }

                }
            )
                ;
        }

    };
    

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentTherapist) => {
            setTherapist(currentTherapist);
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