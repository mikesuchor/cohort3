import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({name, clickIcon}) {
    return(
        <FontAwesomeIcon icon={name} key={name} alt={name} className="icon" onClick={() => clickIcon(name)} />
    )
}

export default Icon;