import style from '../../assets/css/inpitFormStyle.module.css';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from '../../../config/firebaseConfig';
import * as dataService from '../../services/dataService';

export const EditSummary = () =>{
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [devSkills, setDevSkills] = useState("");
    const [softSkills, setSoftSkills] = useState("");
    const [languages, setLanguages] = useState("");

    const devSkillsArray = devSkills.split("; ");
    const softSkillsArray = softSkills.split("; ");
    const languagesArray = languages.split("; ");

    const dataRef = doc(db, "data", "summary");
    
    const data = {
        title,
        summary,
        devSkillsArray,
        softSkillsArray,
        languagesArray,
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dataService.createData(data, dataRef);
        navigate("/admin");
    };
    
    return(
        <div className={style["container"]}> 
            <h1 className={style["title"]}>Create Summary</h1>
            <form className={style["form"]} onSubmit={onSubmit}>
                <div className={style["row"]}>
                    <label htmlFor="title">Title</label>
                    <textarea 
                        className={style["input-type"]} 
                        placeholder="Title" 
                        name="title"
                        id="title"
                        onChange={(e) => {setTitle(e.target.value)}}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="summary">Summary</label>
                    <textarea 
                        className={style["input-type"]}
                        placeholder="Summary" 
                        name="summary"
                        id="summary"
                        onChange={(e) => {setSummary(e.target.value)}}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="devSkills">Development skills</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Development skills"
                        name="devSkills"
                        id="devSkills"
                        onChange={(e) => { setDevSkills(e.target.value) }}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="softSkills">Soft skills</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Soft skills"
                        name="softSkills"
                        id="softSkills"
                        onChange={(e) => { setSoftSkills(e.target.value) }}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="languages">Languages</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Languages"
                        name="languages"
                        id="languages"
                        onChange={(e) => { setLanguages(e.target.value) }}
                    >
                    </textarea>
                </div>
                <button className={style["btn"]}>Create</button>
            </form>
        </div>
    );
};