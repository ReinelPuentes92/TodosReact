import React from 'react';
import './todoList.css';

function TodoList(props) {
    return(
        <section>
            {props.children}
        </section>
    );
}

export {TodoList};