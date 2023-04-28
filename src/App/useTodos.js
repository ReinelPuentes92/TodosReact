import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {

    const {item: todos, 
            saveItem: saveTodos,
            loading,
            error,
            sincronizeItem: sincronizeTodos } = useLocalStorage('TODOS_V1', []);

    let searchedTodos = [];  
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    if (!searchValue >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
        });
        saveTodos(newTodos);
    }



    const completeTodo = (text) =>{
        const todoIndex = todos.findIndex((t) => t.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((t) => t.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
       {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal,
        setOpenModal, 
        addTodo, 
        sincronizeTodos,
        }
    );
}

export {useTodos}