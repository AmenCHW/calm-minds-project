import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase-config";


const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                // eslint-disable-next-line
                console.log("sign out successful");
            })// eslint-disable-next-line
            .catch((error) => console.log(error));
    };



    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button type="button" onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;