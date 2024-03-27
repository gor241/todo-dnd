import React, { useState, ChangeEvent } from 'react';
import styles from './TodoForm.module.css';
import { useDispatch } from 'react-redux';
import { addTodoList } from '../../store/slices/todoSlice';

const TodoForm: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            dispatch(addTodoList(inputValue));
            setInputValue(''); // Очистить значение после добавления
        }
    };
    return (
        <div className={styles.inputContainer}>
            <div>
                <input
                    className={styles.inputField}
                    type="text"
                    value={inputValue}
                    placeholder="Enter new todo"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    title="Add todo"
                    className={styles.inputButton}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
