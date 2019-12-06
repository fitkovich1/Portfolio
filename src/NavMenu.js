import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="#0" className={styles.link}>Главная</a>
            <a href="#1" className={styles.link}>Скилы</a>
            <a href="#2" className={styles.link}>Проекты</a>
            <a href="#3" className={styles.link}>Контакты</a>
        </div>
    );
}

export default NavMenu;
