import React from 'react';
import { Props } from "./type";

const Image = ({ url}: Props) => {
    return (
        <div className="image">

            <img src={url}></img>
        </div>
    );
};

export default Image;