import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../Firebase/Firebase';
 export const AuthConatext=createContext(null)
 const auth=getAuth(app)
const AuthProvider = ({children}) => {
const [ user,setUsers]=useState(null)
const [loading, setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


const logout=()=>{
   return signOut(auth)
}

// oveserver user auth state
useEffect(()=>{
 const unsubscribe =onAuthStateChanged(auth, currentUser=>{
    setUsers(currentUser)
    setLoading(false)
})
// stop observing while unmounting
return ()=>{
    return unsubscribe();
}
},[])

    const authInfo={
user,
createUser,
signIn,
logout,
loading
    }
    return (
        <div>
            <AuthConatext.Provider value={authInfo}>
{children}
            </AuthConatext.Provider>
        </div>
    );
};

export default AuthProvider;