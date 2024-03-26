import React, { useState } from 'react';
import styles from './TodoBlock.module.css';
import basketIcon from './basket.svg';
import updateIcon from './update.svg';
import { TodoElement } from '../TodoElement/TodoElement';

interface TodoBlockProps {
    todoList: string[];
    deleteAllTodo: () => void;
    filterTodos: (todo: string | string[]) => void;
}

const TodoBlock: React.FC<TodoBlockProps> = ({
    todoList,
    deleteAllTodo,
    filterTodos,
}) => {
    const [yourComplete, setYourComplete] = useState<string[]>([]);

    function deleteCompleted() {
        if (yourComplete.length > 0) {
            filterTodos(yourComplete);
            setYourComplete([]);
        }
    }

    function addCompletedTodo(todo: string) {
        const filtred = yourComplete.includes(todo)
            ? yourComplete.filter((el) => el !== todo)
            : [...yourComplete, todo];
        console.log(yourComplete);
        setYourComplete(filtred);
    }

    return (
        <div className={styles.blockContainer}>
            <div className={styles.blockButtons}>
                <button
                    onClick={deleteCompleted}
                    className={styles.buttonBlock}
                >
                    <img
                        className={styles.imgBlock}
                        src={basketIcon}
                        alt="Корзина"
                    />
                </button>
                <button onClick={deleteAllTodo} className={styles.buttonBlock}>
                    <img
                        className={styles.imgBlock}
                        src={updateIcon}
                        alt="Иконка обновления"
                    />
                </button>
            </div>
            {todoList.map((el) => (
                <TodoElement
                    key={el}
                    data={el}
                    addCompletedTodo={addCompletedTodo}
                    filterTodos={filterTodos}
                />
            ))}
            {yourComplete.length > 0 && (
                <p className={styles.paragraphBlock}>
                    Your have completed {yourComplete.length} todos
                </p>
            )}
        </div>
    );
};

export default TodoBlock;
