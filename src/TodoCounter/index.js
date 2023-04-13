import React, { useContext } from 'react';
import './todoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {

    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
        
}

export {TodoCounter}