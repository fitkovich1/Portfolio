import React from 'react';
import styles from './Projects.module.css';

function Project() {
    return (<>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>01</h2>
                    <h3>Название проекта</h3>
                    <p>Описание проекта</p>
                    <button>Смотреть</button>
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>02</h2>
                    <h3>Название проекта</h3>
                    <p>Описание проекта</p>
                    <button>Смотреть</button>
                </div>

            </div>

            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>03</h2>
                    <h3>Название проекта</h3>
                    <p>Описание проекта</p>
                    <button>Смотреть</button>
                </div>

            </div>
        </>
    );
}

export default Project;
