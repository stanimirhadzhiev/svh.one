import { Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Login/Login';
import { Logout } from '../Components/Logout/Logout';
import { EditSummary } from '../Components/EditSummary/EditSummary';
import { CreateProject } from '../Components/Projects/CreateProject/CreateProject';
import { CreateEducation } from '../Components/Education/CreateEducation/CreateEducation';
import { EditEducation } from '../Components/Education/EditEducation/EditEducation';
import { Navigation } from '../Components/Navigation/Navigation';
import { AddExperience } from '../Components/Experience/AddExperience/AddExperience';
import { AddContacts } from '../Components/Contacts/AddContacts/AddContacts';

export const Admin = () =>{
    return(
        <div className='Admin'>
            <Navigation/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/edit-summary" element={<EditSummary/>}/>
                <Route path="/create-project" element={<CreateProject/>}/>

                <Route path="/create-education" element={<CreateEducation/>}/>
                <Route path="/edit-education" element={<EditEducation/>}/>
                
                <Route path="/add-experience" element={<AddExperience/>}/>
                <Route path="/add-contacts" element={<AddContacts/>}/>
            </Routes>
        </div>
    );
};