import React from 'react';
import "./style.css";     

const Image = (props) => {
    return (
        <div className="image">
            <img src={props.url}></img>
        </div>
    );
};

export default Image;