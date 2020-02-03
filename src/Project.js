import React from 'react';
import styles from './Projects.module.css';

function Project() {
    return (<>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>01</h2>
                    <h3>Dog-game</h3>
                    <p>Project description</p>
                    <button>Watch</button>
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>02</h2>
                    <h3>TodoList</h3>
                    <p>Project description</p>
                    <button>Watch</button>
                </div>

            </div>

            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>03</h2>
                    <h3>Counter</h3>
                    <p>Project description</p>
                    <button><a href='https://fitkovich1.github.io/CounterRedux/'>Watch</a></button>
                </div>

            </div>
        </>
    );
}

export default Project;
