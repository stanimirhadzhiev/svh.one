import style from '../../../assets/css/inpitFormStyle.module.css';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from '../../../../config/firebaseConfig';
import * as dataService from '../../../services/dataService';
import * as validators from '../../../utils/validators';

export const AddContacts = () =>{
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [data, setData] = useState({
        linkedin: "",
        github: "",
        email: "",
        phoneNumber: "",
        website: "",
    });
    
    const dataRef = doc(db, "data", "contacts");
    
    const changeHandler = (e) =>{
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
        setError("");
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dataService.createData(data, dataRef);
        navigate("/admin");
    };
    console.log(error);
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
                        value={data.linkedin}
                        onChange={changeHandler}
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
                        value={data.github}
                        onChange={changeHandler}
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
                        value={data.email}
                        onChange={changeHandler}
                        onBlur={(e) => validators.emailValidator(e.target.value, setError)}
                    >
                    </input>
                    {error && <p className={style["error-message"]}>{error}</p>}
                </div>
                <div className={style["row"]}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        className={style["input-type"]}
                        placeholder="Phone Number"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={data.phoneNumber}
                        onChange={changeHandler}
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
                        value={data.website}
                        onChange={changeHandler}
                    >
                    </input>
                </div>
                <button className={style["btn"]}>Add</button>
            </form>
        </div>
    );
};