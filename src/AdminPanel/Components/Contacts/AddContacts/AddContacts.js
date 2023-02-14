import style from '../../../assets/css/inpitFormStyle.module.css';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from '../../../../config/firebaseConfig';
import * as dataService from '../../../services/dataService';

export const AddContacts = () =>{
    const navigate = useNavigate();
    
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");


    const dataRef = doc(db, "data", "contacts");

    
    const data = {
        linkedin,
        github,
        email,
        phoneNumber,
        website
    };

    

    const onSubmit = async (e) => {
        e.preventDefault();
        dataService.createData(data, dataRef);
        navigate("/admin");
    };
    
    return(
        <div className={style["container"]}> 
            <h1 className={style["title"]}>Add Experience</h1>
            <form className={style["form"]} onSubmit={onSubmit}>
                <div className={style["row"]}>
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input 
                        className={style["input-type"]} 
                        placeholder="LinkedIn"
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        onChange={(e) => {setLinkedin(e.target.value)}}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="github">GitHub</label>
                    <input
                        className={style["input-type"]}
                        placeholder="GitHub"
                        type="url" 
                        name="github"
                        id="github"
                        onChange={(e) => { setGithub(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={style["input-type"]}
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        className={style["input-type"]}
                        placeholder="Phone Number"
                        name="phoneNumber"
                        id="phoneNumber"
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="website">Website</label>
                    <input
                        type="url"
                        className={style["input-type"]}
                        placeholder="Website"
                        name="website"
                        id="website"
                        onChange={(e) => { setWebsite(e.target.value) }}
                    >
                    </input>
                </div>
                <button className={style["btn"]}>Add</button>
            </form>
        </div>
    );
};