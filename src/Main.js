import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main} id="0">
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.hello}>Привет!</span>
                    <span className={styles.name}>Я Николай Фиткович</span>
                    <span className={styles.whoAmI}>Я front-end разработчик</span>
                </div>
                <div className={styles.photo}>
                    <img src="https://i.pinimg.com/originals/05/3c/c2/053cc2353dd46da96c04ed853c28dd03.jpg"
                         alt="Мое фото"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
