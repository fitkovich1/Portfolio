import React from 'react';
import styles from './Projects.module.css';
import Project from "../Projects/Project";

function Projects() {
    const projectsProp = [
        {id: '01', name:'Joker-game', description: 'Project description', href: 'https://fitkovich1.github.io/dog-game/'},
        {id: '02', name:'TodoList', description: 'Project description', href: 'https://fitkovich1.github.io/dog-game/'},
        {id: '03', name:'Counter', description: 'Project description', href: 'https://fitkovich1.github.io/CounterRedux/'},
        {id: '04', name:'Tic-tac-toe', description: 'Project description', href: 'https://fitkovich1.github.io/tic-tac-toe/'}
    ];
    let projects = projectsProp.map((pr) => <Project id={pr.id} name={pr.name} description={pr.description} href={pr.href}/>)
    return (
        <div className={styles.projectsBlock} id="2">
            <span className={styles.myProjects}>My projects</span>
            <div className={styles.container}>
              {projects}
            </div>
        </div>
    );
}

export default Projects;
