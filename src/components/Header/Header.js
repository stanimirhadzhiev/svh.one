import style from './Header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";

import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export const Header = () =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const handleToggle = () => {
        setIsNavExpanded(false);
    };
    
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
                        <HashLink to={'/#home'} onClick={handleToggle}>
                            Home
                        </HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#about'} onClick={handleToggle}>About Me</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#education'} onClick={handleToggle}>Education</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#portfolio'} onClick={handleToggle}>Portfolio</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#experience'} onClick={handleToggle}>Professional Experience</HashLink> 
                    </li>
                    <li>
                       <HashLink to={'/#contacts'} onClick={handleToggle}>Contacts</HashLink> 
                    </li>
                </ul>
                
            </nav>
        </header>
    );
};