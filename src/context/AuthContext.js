import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, signInWithRedirect,
    onAuthStateChanged,
    signOut,
    FacebookAuthProvider,
    // deleteUser
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
    const createUser = (email, password, fullName, birthDate) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)

                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`,
                        email,
                        isTherapist: false,

                        gender: '',
                        fullName: fullName,
                        birthDate: birthDate,
                        photoURL: '',
                        educationLevel: "",
                        hobbies: "",
                        familySize: 1,
                        phonenumber: 0,
                        book_an_appointment: {},

                    });
                    // console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            }
        )
    }

    const createTherapist = (email, password, username, city, licensenumber) => {
        return createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)

                try {
                    const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                        userId: `${result.user.uid}`,
                        fullname: " ",
                        bio: " ",
                        birthdate: " ",
                        phonenumber: 0,
                        email,
                        isTherapist: true,
                        username: username,
                        city: city,
                        licensenumber: licensenumber
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

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
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


    const updateUser = async (fullName, birthDate, gender, educationLevel, hobbies, familySize, phonenumber) => {


                try {
                    const docRef = doc(db, "users", `${result.user.uid}`)
                    await updateDoc(docRef), {
                        gender: gender,
                        fullName: fullName,
                        birthDate: birthDate,
                        // photoURL: photoURL,
                        educationLevel: educationLevel,
                        hobbies: hobbies,
                        familySize: familySize,
                        phonenumber: phonenumber,
                    };
                    // console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error(e);
                }
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
            <UserContext.Provider value={{ createUser, signIn, googleSignIn, user, logOut, facebookSignIn, updateUser }}>
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
