import style from './Home.module.css';

export const Home = () =>{
    return(
        <div className={style["home"]} id="home">
            <div className="container">
                <img className={style["my__img"]} src={require("../../assets/images/img.jpg")} alt="Image not found!"/>
            </div>
        </div>
    );
}; 