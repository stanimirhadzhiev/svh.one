import style from "./Contacts.module.css";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineGlobal, AiFillPhone } from "react-icons/ai";

import { useEffect, useState } from 'react';
import * as getDataService from '../../services/getDataService';

export const Contacts = () =>{
    const [contacts, setContacts] = useState({});

    useEffect(() => {
        getDataService.getContacts(setContacts);
    },[]);


    return(
        <div className={style["container"]} id="contacts">
            <div className={style["col"]} >
                <h2>Send me a message</h2>
                <form target="_blank" method="POST" action="https://formsubmit.co/5a9054e2732f73752f0ed150b6baddeb">
                    <div className={style["form-group"]}>
                        <label htmlFor="formGroupExampleInput mb-2">Name</label>
                        <input type="text"
                            id="formGroupExampleInput"
                            className={style["form-control"]}
                            placeholder="Name"
                            name="name"
                            required
                        />
                    </div>
                    <div className={style["form-group"]}>
                        <label htmlFor="exampleFormControlInput1 mb-2">Email address</label>
                        <input
                            type="email"
                            id="exampleFormControlInput1"
                            className={style["form-control"]}
                            placeholder="name@example.com"
                            name="email"
                            required
                        />
                    </div>
                    <div className={style["form-group"]}>
                        <label htmlFor="exampleFormControlTextarea1 mb-2">Message</label>
                        <textarea
                            id="exampleFormControlTextarea1"
                            className={style["form-control"]}
                            rows="3"
                            name="Message"
                            required
                        >
                        </textarea>
                    </div>

                    <div>
                        <button className={style["btn"]} type="submit">Send Message</button>
                    </div>
                </form>
            </div>
            <div className={style["col"]}>
                <h2>Contact with me</h2>
                <div className={style["row"]}>
                    <AiFillLinkedin className={style["icon"]}/>
                    <span>
                        <a href={contacts.linkedin} target="_blank" rel="noreferrer" className={style["contacts-link"]}>
                            {contacts.linkedin}
                        </a>
                    </span>
                </div>
                <div className={style["row"]}>
                    <AiFillGithub className={style["icon"]}/>
                    <span>
                        <a href={contacts.github} target="_blank" rel="noreferrer" className={style["contacts-link"]}>
                            {contacts.github}
                        </a>
                    </span>
                </div>
                <div className={style["row"]}>
                    <AiFillMail className={style["icon"]}/>
                    <span>
                        <a href={"mailto:" + contacts.email} className={style["contacts-link"]}>
                            {contacts.email}
                        </a>
                    </span>
                </div>
                <div className={style["row"]}>
                    <AiFillPhone className={style["icon"]}/>
                    <span>
                        <a href={"tel:" + contacts.phoneNumber} className={style["contacts-link"]}>
                            {contacts.phoneNumber}
                        </a>
                    </span>
                </div>
                <div className={style["row"]}>
                    <AiOutlineGlobal className={style["icon"]}/>
                    <span>
                        <a href={contacts.website} target="_blank" rel="noreferrer" className={style["contacts-link"]}>
                            {contacts.website}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};