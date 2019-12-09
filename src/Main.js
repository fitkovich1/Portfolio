import React from 'react';
/*import styles from './Main.module.css';*/
import './Main.css'


function Main() {
    return (
        <div className = "main" id="0">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <div className="container">
                <div className="greeting">
                    <span className="hello">Привет!</span>
                    <span className="name">Я Николай Фиткович</span>
                    <span className="whoAmI">Я front-end разработчик</span>
                </div>

                <div className="wrapper">
                    <div className="card">
                        <div className="front">
                            <img src="https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg" alt="photo"/>
                        </div>
                        <div className="back">
                            <div className="content">
                                <h1>
                                    Fitkovich Nikolai
                                    <span>Front-end Developer</span>
                                </h1>
                                <ul className="socials">
                                    <li>
                                        <a href="https://vk.com/volleymen"><i className="fa fa-vk"></i></a>
                                        <a href="https://www.instagram.com/nikola10fit_/"><i className="fa fa-instagram"></i></a>
                                        <a href="https://github.com/fitkovich1"><i className="fa fa-github"></i></a>
                                        <a href="https://t.me/Fitkovich_Nikolai"><i className="fa fa-telegram"></i></a>
                                        <a href="https://wa.me/375292746603"><i className="fa fa-whatsapp"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.photo}>
                    <img src="https://i.pinimg.com/originals/05/3c/c2/053cc2353dd46da96c04ed853c28dd03.jpg"
                         alt="Мое фото"/>
                </div>*/}
            </div>
        </div>
    );
}

export default Main;
