import React from 'react';
import './styles.scss';

class Button extends React.PureComponent{
    render(){
        const {name = "Button Name",type = "primary"} = this.props;
        return(
            <div className={`btn btn-${type}`}>
                 <p className="btn-text"> {name} </p>
            </div>
        );
    }
};

export {Button};