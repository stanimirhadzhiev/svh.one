import style from './Navigation.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';

export const Navigation = () =>{
    const {user} = useContext(AuthContext);
    
    return(
        <div className={style["sidebar"]}>
            <div className={style["user-info"]}>
                <img className={style["my__img"]} src={require("../../assets/images/img.jpg")} alt=""/>
                <h4>svhbuild@gmail.com</h4>
            </div>
            <h2>General</h2>
            {user 
                ?   <nav className={style["sidebar-nav"]}>
                        <ul>
                            <li><Link>Create Home</Link></li>
                            <li><Link to={"/admin/edit-summary"}>Create Summary</Link></li>
                            <li><Link to={"/admin/create-education"}>Create Education</Link></li>
                            <li><Link to={"/admin/edit-education"}>Edit Education</Link></li>
                            <li><Link to={"/admin/create-project"}>Create Project</Link></li>
                            <li><Link to={"/admin/add-experience"}>Add Experience</Link></li>
                            <li><Link to={"/admin/add-contacts"}>Add Contacts</Link></li>
                            <li><Link to={"/admin/logout"}>Logout</Link></li>
                        </ul>
                    </nav>
                :   <Link className={style["login-button"]} to={"/admin/login"}>Login</Link> 
            }
            
        </div>
    );
};