import React, { useEffect, useState } from 'react';
import styles from './TodoBlock.module.css';
import basketIcon from './basket.svg';
import updateIcon from './update.svg';
import { TodoElement } from '../TodoElement/TodoElement';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteAllTodo,
    deleteAllTodosComplete,
    moveTodoItem,
} from '../../store/slices/todoSlice';
import { RootState } from '../../store/store';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DroppableProps,
} from 'react-beautiful-dnd';

// Компонент для создания перетаскивания
const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return <Droppable {...props}>{children}</Droppable>;
};

const TodoBlock: React.FC = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(
        (state: RootState) => state.sliceName.todoList
    );
    const lengthComplete = todoList.filter((el) => el.complete).length;

    const deleteCompleted = () => {
        dispatch(deleteAllTodosComplete());
    };

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        dispatch(
            moveTodoItem({
                draggableId: draggableId,
                sourceIndex: source.index,
                destinationIndex: destination.index,
            })
        );
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
            <DragDropContext onDragEnd={onDragEnd}>
                <StrictModeDroppable droppableId="chatacters">
                    {(provided) => (
                        <ul
                            className={styles.chatacters}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {todoList.map((el, i) => (
                                <Draggable
                                    key={el.data}
                                    draggableId={el.data + i}
                                    index={i}
                                >
                                    {(provided) => (
                                        <li
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <TodoElement
                                                data={el.data}
                                                complete={el.complete}
                                            />
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </StrictModeDroppable>
            </DragDropContext>
            {lengthComplete > 0 && (
                <p className={styles.paragraphBlock}>
                    You have completed {lengthComplete} todos
                </p>
            )}
        </div>
    );
};

export default TodoBlock;
