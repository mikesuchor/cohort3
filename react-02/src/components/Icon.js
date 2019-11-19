import React from 'react';

function Icon({name, clickIcon}) {
    return(
        <img src={name} alt={name} className="icon" onClick={() => clickIcon(name)} />
    )
}

export default Icon;