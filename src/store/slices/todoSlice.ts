import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodoList {
    data: string;
    complete: boolean;
}
// Определение типа начального состояния
interface ITodoState {
    todoList: ITodoList[];
}

// Начальное состояние среза
const initialState: ITodoState = {
    todoList: [],
};

// Создание среза
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoList: (state, action: PayloadAction<string>) => {
            state.todoList.push({ data: action.payload, complete: false });
        },
        deleteAllTodo: (state) => {
            state.todoList = [];
        },
        deleteAllTodosComplete: (state) => {
            state.todoList = state.todoList.filter((todo) => !todo.complete);
        },
        filterTodos: (state, action: PayloadAction<string>) => {
            const todosToDelete = action.payload;
            state.todoList = state.todoList.filter(
                (todo) => todosToDelete !== todo.data
            );
        },
        completeTodo: (state, action: PayloadAction<string>) => {
            const todoIndex = state.todoList.findIndex(
                (todo) => todo.data === action.payload
            );
            if (todoIndex !== -1) {
                state.todoList[todoIndex].complete = true;
            }
        },
        moveTodoItem: (
            state,
            action: PayloadAction<{
                draggableId: string;
                sourceIndex: number;
                destinationIndex: number;
            }>
        ) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const itemToMove = state.todoList[sourceIndex];
            state.todoList.splice(sourceIndex, 1);
            state.todoList.splice(destinationIndex, 0, itemToMove);
        },
    },
});

// Экспорт action creators и редьюсера
export const {
    addTodoList,
    deleteAllTodo,
    filterTodos,
    completeTodo,
    deleteAllTodosComplete,
    moveTodoItem,
} = todoSlice.actions;
export default todoSlice.reducer;
