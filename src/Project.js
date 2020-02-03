import React from 'react';
import styles from './Projects.module.css';

function Project() {
    return (<>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>01</h2>
                    <h3>Joker-game</h3>
                    <p>Project description</p>
                    <button><a href='https://fitkovich1.github.io/dog-game/'>Watch</a></button>
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

            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>04</h2>
                    <h3>Tic-tac-toe</h3>
                    <p>Project description</p>
                    <button><a href='https://fitkovich1.github.io/tic-tac-toe/'>Watch</a></button>
                </div>
            </div>
        </>
    );
}

export default Project;
