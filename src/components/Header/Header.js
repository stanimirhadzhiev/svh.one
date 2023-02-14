import style from './Header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";

import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export const Header = () =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return(
        <header className={style["header"]}>
            <nav className={style["navbar"]}>
                <button className={style.hamburger} onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>
                    <GiHamburgerMenu />
                </button>
                <ul className={isNavExpanded ? `${style.topnav} ${style.expanded}` : `${style.topnav}`}>
                    <li>
                       <HashLink to={'/#home'}>Home</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#about'}>About Me</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#education'}>Education</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#portfolio'}>Portfolio</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#experience'}>Professional Experience</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#contacts'}>Contacts</HashLink> 
                    </li>
                </ul>
                
            </nav>
        </header>
    );
};