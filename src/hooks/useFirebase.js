import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    // const [token, setToken] = useState('');

    const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                //   save user to the database
                  saveUser(email, name, 'POST');

        // send name to firebase after creation(solving reloading page to show name)
                 updateProfile(auth.currentUser, {
                    displayName: name
                })
                setAuthError('');
                 history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
        .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // //login with google
    // const signInWithGoogle = (location, history) => {
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             saveUser(user.email, user.displayName, 'PUT');
    //             const destination = location?.state?.from || '/';
    //             history.replace(destination);
    //             setAuthError('');
    //         }).catch((error) => {
    //             setAuthError(error.message);
    //         }).finally(() => setIsLoading(false));
    // }

      // observer user state
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // .then(idToken => {
                //     setToken(idToken);
                // })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    //set admin
    useEffect(() => {
        fetch(`https://mysterious-wildwood-35872.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
//save user info in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://mysterious-wildwood-35872.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        admin,
        logout
    }
}

export default useFirebase;