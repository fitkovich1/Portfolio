import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

function Projects() {
    return (
        <div className={styles.projectsBlock} id="2">
            <span className={styles.myProjects}>Мои работы</span>
            <div className={styles.container}>
                <Project />
            </div>

        </div>
    );
}

export default Projects;
