
//import './App.css';

import React from 'react';

import { useTodos } from './useTodos';

import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function App() {
  
  const {
    addTodo,    
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal, 
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue} = useTodos();

    return (
      <React.Fragment>
          
          <TodoHeader loading={loading}>
              <TodoCounter 
                totalTodos={totalTodos} 
                completedTodos={completedTodos} 
                //loading={loading}
                />                  
              
              <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                //loading={loading} 
                />
          </TodoHeader>

          <TodoList 
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            searchValue={searchValue}
            totalTodos={totalTodos}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={
                (search) => <p>No hay resultados para {search}</p>
            }
          >

            {todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            )}

          </TodoList>
        
          {openModal && (
              <Modal>
                  <TodoForm 
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                  />
              </Modal>
          )}       

          <CreateTodoButton 
              setOpenModal={setOpenModal}
          /> 
          
      </React.Fragment>
    );


}

export default App;
