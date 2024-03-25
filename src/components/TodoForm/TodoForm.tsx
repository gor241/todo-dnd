import React, { useState, ChangeEvent } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
    addTodoList: (todo: string) => void; // Указываем тип функции
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodoList }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            addTodoList(inputValue);
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
                <button className={styles.inputButton} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
