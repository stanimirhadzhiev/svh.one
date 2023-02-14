import { setDoc, updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../../config/firebaseConfig";

export const createData = async (data, dataRef) =>{
    await setDoc(dataRef, data);
    await updateDoc(dataRef, {
        timestamp: serverTimestamp()
    });
}

export const getEducation = async (setEducationData) => {
    const dataRef = doc(db, "data", "education");
    const educationData = await getDoc(dataRef);

    if (educationData.exists()) {
        setEducationData(educationData.data())
    } else {

        console.log("No such document!");
    }
};