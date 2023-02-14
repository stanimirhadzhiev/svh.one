import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebaseConfig';

import { AuthContext } from '../../../context/AuthContext';

import { useNavigate } from "react-router-dom";
import { useContext } from "react";


export const Logout =  () =>{
    const {userLogout} = useContext(AuthContext);
    const navigate = useNavigate();
    signOut(auth)
        .then(() => {
            userLogout()
            navigate("/admin/login")
        })   
};


