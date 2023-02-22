import React from 'react';

import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

import './TodoIcon.css';

function TodoIcon({type, color= 'gray', onClick}) {

    const iconTypes = {
        "check" : (
            <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
        ),
        "delete" : (
            <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
        ),
    };

    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };