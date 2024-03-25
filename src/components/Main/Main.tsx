import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import styles from './Main.module.css';
import TodoBlock from '../TodoBlock/TodoBlock';

export default function Main() {
    const [todoList, setTodoList] = useState<string[]>([]);

    function addTodoList(params: string) {
        setTodoList([...todoList, params]);
    }

    return (
        <div className={styles.container}>
            <TodoForm addTodoList={addTodoList} />
            {todoList.length === 0 ? (
                <p className={styles.paragraphStyle}>Todo list is empty</p>
            ) : (
                <TodoBlock />
            )}
        </div>
    );
}
