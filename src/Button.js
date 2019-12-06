import React from 'react';
import styles from './Projects.module.css';

function Button() {
    return (
        <div className={styles.cell1}>
            <div className={styles.img}>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Смотреть
                </button>
            </div>
        </div>
    );
}

export default Button;
