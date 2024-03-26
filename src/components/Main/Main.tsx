import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import styles from './Main.module.css';
import TodoBlock from '../TodoBlock/TodoBlock';

export default function Main() {
    const [todoList, setTodoList] = useState<string[]>([]);

    function addTodoList(params: string) {
        setTodoList([...todoList, params]);
    }

    function deleteAllTodo() {
        setTodoList([]);
    }

    function filterTodos(todo: string | string[]) {
        if (Array.isArray(todo)) {
            console.log(todoList);

            setTodoList(Array.from(new Set(...todoList, ...todo)));
            console.log(todoList);
        } else {
            const filtred = todoList.filter((el) => el !== todo);
            setTodoList(filtred);
        }
    }

    return (
        <div className={styles.container}>
            <TodoForm addTodoList={addTodoList} />
            {todoList.length === 0 ? (
                <p className={styles.paragraphStyle}>Todo list is empty</p>
            ) : (
                <TodoBlock
                    todoList={todoList}
                    deleteAllTodo={deleteAllTodo}
                    filterTodos={filterTodos}
                />
            )}
        </div>
    );
}
