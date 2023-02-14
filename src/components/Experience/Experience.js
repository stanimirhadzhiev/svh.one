import style from './Experience.module.css'

export const Experience = () =>{
    return(
        <div className={style["professional__experience"]} id="experience">
            <div className={style["timeline"]}>
                <div className={`${style.timelineContainer} ${style.left}`}>
                    <div className={style["content"]}>
                        <h2>2019-Present</h2>
                        <h3>Owner and Manager</h3>
                        <h4>SVH Build Ltd.</h4>
                        <p>
                            After founding my own company I continued working with AKZ, Brita-Burg and other companies, performing mainly surveying work for them. I also managed residential building
                            projects. I gained experience in training people and team leading. <br/>
                            As an additional activity I started drop shipping business, thus gaining experience and understanding of e-commerce in US.
                        </p>
                    </div>
                </div>
                <div className={`${style.timelineContainer} ${style.right}`}>
                    <div className={style["content"]}>
                        <h2>2017-2019</h2>
                        <h3>Construction Manager</h3>
                        <h4>Brita-Burg Ltd.</h4>
                        <p>
                            My main task was to manage the construction of a residential building in Burgas. This job involved many different activities, among which being construction manager, land
                            surveyor, safety manager and supplier.
                        </p>
                    </div>
                </div>
                <div className={`${style.timelineContainer} ${style.left}`}>
                    <div className={style["content"]}>
                        <h2>2014-2017</h2>
                        <h3>Land Surveyor</h3>
                        <h4>AKZ-Burgas Ltd.</h4>
                        <p>
                            I participated as land surveyor in many different construction projects, such as two huge international projects for LUKOIL Neftohim Burgas AD involving construction of fuel tanks and a heavy waste processing plant. I also managed a few other construction projects among which a shooting range, renovation of heling in Port Burgas and a residential building.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};