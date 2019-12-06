import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.varianty}>
                    <span className={styles.variantyRemouteWork}>Рассматриваю варианты удаленной работы</span>
                    <button className={styles.slogan_button}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Нанять меня
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
