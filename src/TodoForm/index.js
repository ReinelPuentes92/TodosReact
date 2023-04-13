import React, { useContext, useState } from 'react';
import { useTodos } from '../App/useTodos';

import './TodoForm.css';

function TodoForm({addTodo,setOpenModal}) {

    const [newTodoValue, setNewTodoValue] = useState('');

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Task'                    
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };