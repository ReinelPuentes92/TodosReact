import React, { useEffect, useReducer, useState } from 'react';

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const {
    sincronizedItem,
    loading,
    error,
    item,
  } = state;

  //const [sincronizedItem, setSincronizedItem] = useState(true);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  //const [item, setItem] = useState(initialValue);

  //Action creators
  const onSave = (newValue) => dispatch({type: actionTypes.save, payload: newValue});
  const onSucess = (parsedItem) => dispatch({type: actionTypes.success, payload: parsedItem});
  const onSincronize = () => dispatch({type: actionTypes.sincronize});
  const onError = (error) => dispatch({type: actionTypes.error, payload: error});

  useEffect(() => {
    setTimeout(() => {

      try {

        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSucess(parsedItem);
        //setItem(parsedItem);
        //setLoading(false);
        //setSincronizedItem(true);
      } catch (error) {
        onError(error);
        //dispatch({type: actionTypes.error, payload: error});
        //setError(true);
      }

    }, 3000)

  }, [sincronizedItem]);

  const saveItem = (newItem) => {

    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      //setItem(newItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
      //dispatch({type: actionTypes.error, payload: error});
      //setError(true);
    }

  };

  const sincronizeItem = () => {
    onSincronize();
    //setLoading(true);
    //setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

//Initial State
const initialState = ({ initialValue }) => ({
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue,
});

//Action types
const actionTypes = {
  save: 'SAVE',
  success: 'SUCCESS',
  sincronize: 'SINCRONIZE',
  error: 'ERROR',  
};

//Se crea el reducer
const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      };
    case actionTypes.success:
      return {
        ...state,
        item: action.payload,
        error: false,
        loading: false,
        sincronizedItem: true,
      };
    case actionTypes.sincronize:
      return {
        ...state,
        loading: true,
        sincronizedItem: false,       
      };
    case actionTypes.error:
      return {
        ...state,
        error: true
      };
    default:
      return {
        ...state,
      };
  }
};


export { useLocalStorage }