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
            setTodoList((prevTodoList) => {
                let filteredList = prevTodoList;
                for (let i = 0; i < todo.length; i++) {
                    filteredList = filteredList.filter((el) => el !== todo[i]);
                }
                return filteredList;
            });
        } else {
            setTodoList((prevTodoList) => {
                const filteredList = prevTodoList.filter((el) => el !== todo);
                return filteredList;
            });
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
