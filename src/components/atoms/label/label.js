import React from 'react';
import "./style.css"

const label = (props) => {
    return (
             <span className="text-label">{props.name}</span>   
    );
  };
export default label;