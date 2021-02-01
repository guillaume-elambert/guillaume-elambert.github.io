import React from 'react';
import './IOSScreen.css';

export const IOSScreen = (props) => {

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

export default IOSScreen;