import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skillsBlock} id = "1">
            <div className={styles.container}>
                <span className={styles.spanMySkills}>Мои скилы</span>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.reactLogoImage}></div>
                        <span className={styles.nameOfSkill}>React</span>
                        <span className={styles.descriptionOfSkill}>Описание скила</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.jsLogoImage}></div>
                        <span className={styles.nameOfSkill}>Java Script</span>
                        <span className={styles.descriptionOfSkill}>Описание скила</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.htmlLogoImage}></div>
                        <span className={styles.nameOfSkill}>HTML/CSS</span>
                        <span className={styles.descriptionOfSkill}>Описание скила</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
