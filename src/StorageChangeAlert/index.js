import React from 'react';
import { useStorageListener } from './useStorageListener';
import './StorageChangeAlert.css';

function StorageChangeAlert({sincronize}) {

  const {show, toggleShow} = useStorageListener(sincronize);

    if (show) {
      return (
        <div className="ChangeAlert-bg">
          <div className="ChangeAlert-container">
            <p>Se ha detectado un cambio en los TODOs</p>
            <p>¿Deseas actualizar el listado?</p>
            <button
              className="TodoForm-button TodoForm-button--add"
              onClick={toggleShow}
            >
              Si!
            </button>
          </div>
        </div>  
      );  
    } else {
        return null;
    }
    
}

/* HCOs
const ChangeAlertWithStorageListener = useStorageListener(StorageChangeAlert); */

export { StorageChangeAlert }