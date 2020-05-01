import React from 'react';
import './styles.scss';

const Button = (props) => {
    
    const {name = "Button Name",type = "primary"} = props;

    return(
        <div className={`btn btn-${type}`}>
            <p className="btn-text"> {name} </p>
        </div>
    );
    
};

export {Button};