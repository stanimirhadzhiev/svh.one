import style from './Summary.module.css';
import { useEffect, useState } from 'react';
import * as getDataService from '../../services/getDataService';


export const Summary = () =>{
    const [summaryData, setSummaryData] = useState({});

    useEffect(() => {
        getDataService.getSummary(setSummaryData);
    },[]);

    

    return(
        <div className={style["container"]} id="about">
            <h1>{summaryData.title}</h1>
            <p>
                {summaryData.summary}
            </p>
            <div className={style["table"]}>
                <div className={style["col"]}>
                    <h3 >Development skills</h3>
                    <ul>
                        {summaryData.devSkillsArray === undefined
                            ? <div>Loading...</div>
                            : summaryData.devSkillsArray.map((skill)=>{return <li key={skill.toString()}>{skill}</li>})
                        }
                    </ul>
                </div>
                <div className={style["col"]}>
                    <h3 >Soft skills</h3>
                    <ul>
                        {summaryData.softSkillsArray === undefined
                            ? <div>Loading...</div>
                            : summaryData.softSkillsArray.map((skill) => { return <li key={skill.toString()}>{skill}</li> })
                        }
                    </ul>
                </div>
                <div className={style["col"]}>
                    <h3>Languages</h3>
                    <ul>
                        {summaryData.languagesArray === undefined
                            ? <div>Loading...</div>
                            : summaryData.languagesArray.map((skill) => { return <li key={skill.toString()}>{skill}</li> })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};