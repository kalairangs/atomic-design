import React from 'react';
import "./style.css"

const title = (props) => {
    return (
      <div className="subTitle">
              {props.title}  
      </div>
    );
  };

export default title;