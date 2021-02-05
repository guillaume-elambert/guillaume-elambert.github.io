import React from 'react';
import './Screen.css';

export const Screen = (props) => {

    return (
        <div className="screen">
            <div className="screen-bar">
                { props.screenTitle }
                <i></i>
            </div>
            { props.screenTitle && <div className="screen-content">{props.content}</div> }
        </div>
    );

}

export default Screen;