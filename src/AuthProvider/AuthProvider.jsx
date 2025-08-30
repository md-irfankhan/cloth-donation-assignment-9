import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const gProvider=new GoogleAuthProvider()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleUser=()=>{
        return signInWithPopup(auth,gProvider)
    }
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const userProfileUpdate=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const value={
        createUser,
        loginUser,
        signOutUser,
        loading,
        setLoading,
        userProfileUpdate,
        user,
        googleUser
    }
    return (
        <div>
           <AuthContext.Provider value={value}>
             {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;