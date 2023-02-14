import style from "./ProjectsList.module.css";

import { useEffect, useState } from 'react';
import * as getDataService from '../../services/getDataService';

import { Project } from "./Project/Project";

export const ProjectsList = () =>{
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getDataService.getAllProjects(setProjectList);
    },[]);

    console.log(projectList);

    return(
            <div className={style["container"]} id="portfolio">
                {projectList.length > 0
                    ? projectList.map(project => <Project key={project.id} project={project} />)
                    : <h3 className="no-articles">No projects yet</h3>
                }
                {/* <Project/> */}
            </div>
    );
};