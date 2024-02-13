import React, { useReducer } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
    UPDATE_TODO_TEXT_FIELD: 'update-todo-text-field'
};

const createTask = (taskValue) => {
    return {
        id: Math.ceil(Math.random() * 50000),
        value: taskValue,
        isCompleted: false
    };
}
const todoReducer = (currentState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return { ...currentState, todos: [...currentState.todos, createTask(currentState.todo)]};
        case ACTIONS.TOGGLE_TODO:
            const modifiedTodos = currentState.todos.map(todo => todo.id === action.payload.taskId ? { ...todo, isCompleted: !todo.isCompleted } : todo );
            return { ...currentState, todos: modifiedTodos };
        case ACTIONS.DELETE_TODO:
            const updatedTodos = currentState.todos.filter(todo => todo.id !== action.payload.taskId);
            return {...currentState, todos: updatedTodos};
        case ACTIONS.UPDATE_TODO_TEXT_FIELD:
            return { ...currentState, todo: action.payload.taskValue};
        default: return currentState;
    }
}
const App = () => {
    const initialTodos = [
        {
            id: 1, 
            value: 'Task 1',
            isCompleted: false
        },
        {
            id: 2, 
            value: 'Task 2',
            isCompleted: true
        }
    ]
    const [state, dispatch] = useReducer(todoReducer, { todos: initialTodos, todo: '' });
    console.log(state);
    return (
        <div>
            <Header />
            <Container maxWidth='lg' sx={{ marginTop: 4 }}>
                <TaskForm  taskValue={ state.todo } dispatch={ dispatch } />
                <TaskList tasks = { state.todos } dispatch={ dispatch } />
            </Container>
        </div>
    );
};

export default App;