
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
          
          <TodoHeader>
              <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>                  
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          </TodoHeader>
              
          <TodoList>
              {error && <TodosError error={error}/>}
              {loading && <TodosLoading />}
              {(!loading && !searchedTodos.length) && <EmptyTodos />}

              {searchedTodos.map(todo => (
              <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
              />
              ))}
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
