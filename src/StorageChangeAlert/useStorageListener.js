import React, { useState } from 'react';

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };
    
    return {
        show: storageChange,
        toggleShow,
    };
}


/* HOCs */
/*
function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        
        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        };

        return (
            <React.Fragment>
                <WrappedComponent 
                    show={storageChange} 
                    toggleShow={toggleShow}
                />
            </React.Fragment>
        );
    }
}*/

export { useStorageListener }