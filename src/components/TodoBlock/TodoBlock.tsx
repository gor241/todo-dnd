import React from 'react';
import styles from './TodoBlock.module.css';
import basketIcon from './basket.svg';
import updateIcon from './update.svg';
import { TodoElement } from '../TodoElement/TodoElement';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteAllTodo,
    deleteAllTodosComplete,
} from '../../store/slices/todoSlice';
import { RootState } from '../../store/store';

const TodoBlock: React.FC = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(
        (state: RootState) => state.sliceName.todoList
    );
    const lengthComplete = todoList.filter((el) => el.complete).length;

    const deleteCompleted = () => {
        dispatch(deleteAllTodosComplete());
    };

    return (
        <div className={styles.blockContainer}>
            <div className={styles.blockButtons}>
                <button
                    onClick={deleteCompleted}
                    className={styles.buttonBlock}
                    title="deleteCompleted"
                >
                    <img
                        className={styles.imgBlock}
                        src={basketIcon}
                        alt="Корзина"
                    />
                </button>
                <button
                    title="deleteAllTodo"
                    onClick={() => dispatch(deleteAllTodo())}
                    className={styles.buttonBlock}
                >
                    <img
                        className={styles.imgBlock}
                        src={updateIcon}
                        alt="Иконка обновления"
                    />
                </button>
            </div>
            {todoList.map((el, i) => (
                <TodoElement key={i} data={el.data} complete={el.complete} />
            ))}
            {lengthComplete > 0 && (
                <p className={styles.paragraphBlock}>
                    Your have completed {lengthComplete} todos
                </p>
            )}
        </div>
    );
};

export default TodoBlock;
