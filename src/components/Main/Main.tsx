import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from '../TodoForm/TodoForm';
import styles from './Main.module.css';
import TodoBlock from '../TodoBlock/TodoBlock';
import { RootState } from '../../store/store';

const Main: React.FC = () => {
    const todoList = useSelector(
        (state: RootState) => state.sliceName.todoList
    );

    return (
        <div className={styles.container}>
            <TodoForm />
            {todoList.length === 0 ? (
                <p className={styles.paragraphStyle}>Todo list is empty</p>
            ) : (
                <TodoBlock />
            )}
        </div>
    );
};

export default Main;
