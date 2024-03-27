import React, { useState } from 'react';

import titleIcon from './icon.svg';
import styles from './TodoElement.module.css';

interface TodoElementProps {
    data: string;
    addCompletedTodo: (todo: string) => void;
    filterTodos: (todo: string) => void;
}

export const TodoElement: React.FC<TodoElementProps> = ({
    data,
    addCompletedTodo,
    filterTodos,
}) => {
    const [todoComplete, setTodoComplete] = useState(false);
    function completeTodo() {
        setTodoComplete(!todoComplete);
        addCompletedTodo(data);
    }

    function deleteTodo() {
        filterTodos(data);
    }
    return (
        <div className={!todoComplete ? styles.container : styles.completed}>
            <img src={titleIcon} alt="icon" />
            <p>{data}</p>
            <button title="deleteTodo" onClick={deleteTodo}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                    className={styles.basket}
                >
                    <path d="M20.222,26H9.778c-1.014,0-1.868-0.759-1.986-1.766L6,9h18l-1.792,15.234C22.089,25.241,21.236,26,20.222,26z" />
                    <line
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeWidth: 2,
                            strokeLinecap: 'round',
                            strokeMiterlimit: 10,
                        }}
                        x1="8.5"
                        y1="5"
                        x2="21.5"
                        y2="5"
                    />
                    <line
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeWidth: 2,
                            strokeLinecap: 'round',
                            strokeMiterlimit: 10,
                        }}
                        x1="15"
                        y1="3.5"
                        x2="15"
                        y2="5.5"
                    />
                    <line
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeWidth: 2,
                            strokeLinecap: 'round',
                            strokeMiterlimit: 10,
                        }}
                        x1="6"
                        y1="6"
                        x2="24"
                        y2="6"
                    />
                </svg>
            </button>
            <button title="completeTodo" onClick={completeTodo}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    className={styles.complete}
                >
                    <polyline
                        className={styles.polyline}
                        points="7,28.852 21.921,42.348 43,9.652"
                    />
                </svg>
            </button>
        </div>
    );
};
