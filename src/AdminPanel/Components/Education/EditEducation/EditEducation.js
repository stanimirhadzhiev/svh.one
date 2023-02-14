import style from '../../../assets/css/inpitFormStyle.module.css';

import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from '../../../../config/firebaseConfig';
import * as dataService from '../../../services/dataService';

export const EditEducation = () =>{
    const navigate = useNavigate();
    const [education, setEducation] = useState("");
    const [technicalCourses, setTechnicalCourses] = useState("");
    const [educationData, setEducationData] = useState({});

    const educationArray = education.split("; ");
    const technicalCoursesArray = technicalCourses.split("; ");

    const dataRef = doc(db, "data", "education");
    
    const data = {
        educationArray,
        technicalCoursesArray,
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dataService.createData(data, dataRef);
        navigate("/admin");
    };

    useEffect(() => {
        dataService.getEducation(setEducationData);
    },[]);
    console.log(data);
    return(
        <div className={style["container"]}> 
            <h1 className={style["title"]}>Create Education</h1>
            <form className={style["form"]} onSubmit={onSubmit}>
                <div className={style["row"]}>
                    <label htmlFor="education">Education</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Education"
                        name="education"
                        id="education"
                        defaultValue={educationData.educationArray}
                        onChange={(e) => { setEducation(e.target.value) }}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="technicalCourses">Technical Courses</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Technical Courses"
                        name="technicalCourses"
                        id="technicalCourses"
                        defaultValue={educationData.technicalCoursesArray}
                        onChange={(e) => { setTechnicalCourses(e.target.value) }}
                    >
                    </textarea>
                </div>
                <button className={style["btn"]}>Create</button>
            </form>
        </div>
    );
};