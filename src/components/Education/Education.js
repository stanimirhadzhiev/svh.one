import style from "./Education.module.css";

import { useEffect, useState } from 'react';
import * as getDataService from '../../services/getDataService';

export const Education = () =>{

    const [educationData, setEducationData] = useState({});

    useEffect(() => {
        getDataService.getEducation(setEducationData);
    },[]);

    return(
        <div className={style["container"]} id="education">
            <h2>Education</h2>
            <ul>
                {educationData.educationArray === undefined
                    ? <div>Loading...</div>
                    : educationData.educationArray.map((skill) => { return <li key={skill.toString()}>{skill}</li> })
                }
            </ul>
        
            <h2>Technical Courses</h2>
            <ul>
                {educationData.technicalCoursesArray === undefined
                    ? <div>Loading...</div>
                    : educationData.technicalCoursesArray.map((skill) => { return <li key={skill.toString()}>{skill}</li> })
                }
            </ul>
        </div>
    );
};