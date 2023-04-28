import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

/* 
HOC
function App(props) {
  return (
    <h1>¡{props.saludo}, {props.nombre}!</h1>
  );
}

//Hihg order component

function withSaludo(WrappedComponent){
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponentTrue(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
            <p>Segundo Componente</p>
        </React.Fragment>
      );
    }
  }
}

const AppWithSaludo = withSaludo(App)('Buenas');

*/
ReactDOM.render(
  <App saludo={'Hola'} nombre={'Reinel'} />,
  document.getElementById('root')
);