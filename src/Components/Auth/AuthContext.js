import React, {useState, useEffect} from 'react'
import { auth } from '../../firebase'

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState()

    let signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    let login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    let logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) => {
            console.log('new user state -> ', user)
            setUser(user)
        })
        return () => {
            unsub();
        }
    }, [])

    const store = {
        signup,
        login,
        logout,
        user
    }

    return (
        <>
            <AuthContext.Provider value={store}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

