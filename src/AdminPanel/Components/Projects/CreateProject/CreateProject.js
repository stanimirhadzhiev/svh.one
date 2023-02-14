import style from '../../../assets/css/inpitFormStyle.module.css';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { collection, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../../config/firebaseConfig';
import * as dataService from '../../../services/dataService';
import { async } from '@firebase/util';

export const CreateProject = () =>{
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [usedTechnologies, setUsedTechnologies] = useState("");
    const [gitHubLink, setGitHubLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [uploadImage, setUploadImage] = useState({});
    const [imageUrl, setImageUrl] = useState("")

    const usedTechnologiesArray = usedTechnologies.split("; ");

    const dataRef = doc(collection(db, "projects"));

    
    const storageRef = ref(storage, `images/${title}/image.png`);

    const uploadProjectImage = async () => {
        await uploadBytes(storageRef, uploadImage).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
    }
    
    const data = {
        title,
        gitHubLink,
        websiteLink,
        usedTechnologiesArray,
        imageUrl,
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        dataService.createData(data, dataRef);
        uploadProjectImage();
        navigate("/admin");
    };
    
    return(
        <div className={style["container"]}> 
            <h1 className={style["title"]}>Create Project</h1>
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
                    <label htmlFor="usedTechnologies">Used technologies</label>
                    <textarea
                        className={style["input-type"]}
                        placeholder="Used technologies"
                        name="usedTechnologies"
                        id="usedTechnologies"
                        onChange={(e) => { setUsedTechnologies(e.target.value) }}
                    >
                    </textarea>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="gitHubLink">Upload GitHub Link</label>
                    <input
                        type="url"
                        className={style["input-type"]}
                        placeholder="GitHub Link"
                        name="gitHubLink"
                        id="gitHubLink"
                        onChange={(e) => { setGitHubLink(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="websiteLink">Upload Website Link</label>
                    <input
                        type="url"
                        className={style["input-type"]}
                        placeholder="Website Link"
                        name="websiteLink"
                        id="websiteLink"
                        onChange={(e) => { setWebsiteLink(e.target.value) }}
                    >
                    </input>
                </div>
                <div className={style["row"]}>
                    <label htmlFor="uploadImage">Upload Image</label>
                    <input
                        type="file"
                        className={style["input-type"]}
                        placeholder="Upload Image"
                        name="uploadImage"
                        id="uploadImage"
                        onChange={(e) => { setUploadImage(e.target.files[0]) }}
                    >
                    </input>
                </div>
                <button className={style["btn"]}>Create</button>
            </form>
        </div>
    );
};