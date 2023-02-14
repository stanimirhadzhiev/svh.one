import style from './Login.module.css';

import { useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebaseConfig';

import { AuthContext } from '../../../context/AuthContext';

export const Login = () =>{
    const {setCurrentUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setCurrentUser()
                navigate("/admin");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                if(errorCode === "auth/wrong-password"){
                    alert("Wrong password");
                };
            });
    };
    
    return(
        <div className={style["container"]}>
            <h1 className={style["title"]}>Login</h1>
            
            <form className={style["login-form"]} onSubmit={onSubmit}>
                <div className={style["row"]}>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        className={style["input-type"]} 
                        placeholder="E-mail" 
                        name="email"
                        id="email"
                        onChange={(e) => {setEmail(e.target.value)}}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className={style["input-type"]}
                        placeholder="Password" 
                        name="password"
                        id="password"
                        onChange={(e) => {setPassword(e.target.value)}}
                    >
                    </input>
                </div>
                <button className={style["btn"]}>Sign In</button>
            </form>
        </div>
    );
};