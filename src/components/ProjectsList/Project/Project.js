import style from "./Project.module.css";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";

// import { useEffect, useState } from "react";

// import { storage } from '../../../config/firebaseConfig';
// import { getDownloadURL, ref } from "firebase/storage";
// import { async } from "@firebase/util";

export const Project = ({project}) =>{
    // const [imageUrl, setImageUrl] = useState([]);
    // const projectImageRef = ref(storage, `images/${project.title}/image.png`);

    // // useEffect(async () => {
    // //     await getDownloadURL(projectImageRef).then((url) => {
    // //         console.log(url);
    // //         setImageUrl(url);
    // //     });
    // // }, []);
    // console.log(project);
    
    return(
        <div className={style["container"]}>
            <div className={style["project-img"]}>
                <img  src={project.url} alt="Image not found!" />
            </div>
            <div className={style["description"]}>
                <h3>{project.title}</h3>
                <br />
                <a target="_blank" rel="noreferrer" href={project.gitHubLink}>
                    <AiOutlineGithub className={style["icon"]}/>
                    {project.gitHubLink}
                </a>
                <br />
                <a target="_blank" rel="noreferrer" href={project.websiteLink}>
                    <AiOutlineGlobal className={style["icon"]}/>
                    {project.websiteLink}
                </a>
                <ul>
                    {project.usedTechnologiesArray === undefined
                        ? <div>Loading...</div>
                        : project.usedTechnologiesArray.map((skill) => { return <li key={skill.toString()}>{skill}</li> })
                    }
                </ul>
            </div>
        </div>
    );
};