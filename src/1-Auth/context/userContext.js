import { createContext, useContext, useState } from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth"
import { collection, doc, addDoc, deleteDoc, getDoc, getDocs, onSnapshot, query, where, updateDoc, increment } from "firebase/firestore"
import { auth, db } from "./authIndex"


export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("Friend")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [resetPassword, setResetPassword] = useState(false)

    useState(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) => {
        if (res) {
            setUser(res)
        } else {
            setUser(null)
        }
        setError("")
        setLoading(false)
        })
        return unsubscribe
    }, [])

    const registerUser = (email, password, name) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() =>
            updateProfile(auth.currentUser, {
            displayName: name,
            }),
        )
        .catch((err) => {
            setError(err.message)
            setTimeout(() => {setError("")}, 4000)
        })
        .finally(() => setLoading(false))
    }
    
    const signInUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .catch((err) => {
            setError(err.message)
            setTimeout(() => {setError("")}, 4000)
        })
        .finally(() => setLoading(false))
    }
    
    const logoutUser = () => {
        signOut(auth)
    }
    
    const forgotPassword = async (email) => {
        setLoading(true)
        try {
            await sendPasswordResetEmail(auth, email)
        } catch (err) {
            console.log(err.message)
        }
        setLoading(false)
    }

    const contextValue = {
        user,
        loading,
        error,
        db,
        onSnapshot, 
        query,
        where,
        collection,
        doc,
        addDoc,
        getDoc,
        getDocs,
        increment,
        deleteDoc,
        updateDoc,
        signInUser,
        registerUser,
        logoutUser,
        forgotPassword,
        resetPassword,
        setResetPassword,
    }
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}
