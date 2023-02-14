import style from '../../../assets/css/inpitFormStyle.module.css';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { collection, doc } from "firebase/firestore";
import { db } from '../../../../config/firebaseConfig';
import * as dataService from '../../../services/dataService';

export const AddExperience = () =>{
    const navigate = useNavigate();
    
    const [period, setPeriod] = useState("");
    const [occupation, setOccupation] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");


    const dataRef = doc(collection(db, "experience"));

    
    const data = {
        period,
        occupation,
        companyName,
        description,
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
                    <label htmlFor="period">Period</label>
                    <input 
                        className={style["input-type"]} 
                        placeholder="Period"
                        type="text" 
                        name="period"
                        id="period"
                        onChange={(e) => {setPeriod(e.target.value)}}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="occupation">Occupation</label>
                    <input
                        className={style["input-type"]}
                        placeholder="Occupation"
                        type="text" 
                        name="occupation"
                        id="occupation"
                        onChange={(e) => { setOccupation(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        className={style["input-type"]}
                        placeholder="Company Name"
                        name="companyName"
                        id="companyName"
                        onChange={(e) => { setCompanyName(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Description"
                        name="description"
                        id="description"
                        onChange={(e) => { setDescription(e.target.value) }}
                    >
                    </textarea>
                </div>
                <button className={style["btn"]}>Add</button>
            </form>
        </div>
    );
};