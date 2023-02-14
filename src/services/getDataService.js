import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getAllProjects = async (setProjectList) =>{
    const data = await getDocs(collection(db, "projects"));
    setProjectList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export const getSummary = async (setSummaryData) => {
    const dataRef = doc(db, "data", "summary");
    const summaryData = await getDoc(dataRef);

    if (summaryData.exists()) {
        setSummaryData(summaryData.data())
    } else {

        console.log("No such document!");
    }
};

export const getEducation = async (setEducationData) => {
    const dataRef = doc(db, "data", "education");
    const educationData = await getDoc(dataRef);

    if (educationData.exists()) {
        setEducationData(educationData.data())
    } else {

        console.log("No such document!");
    }
};

export const getContacts = async (setContacts) => {
    const dataRef = doc(db, "data", "contacts");
    const contactsData = await getDoc(dataRef);

    if (contactsData.exists()) {
        setContacts(contactsData.data())
    } else {

        console.log("No such document!");
    }
};

