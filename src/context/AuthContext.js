import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', {});

    const setCurrentUser = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const userLogout = () => {
        setUser({});
    };

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            userLogout,
            setCurrentUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
}