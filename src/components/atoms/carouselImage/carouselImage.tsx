import React from 'react';
import { Props } from "./type";

const carouselImage = ({ url}: Props) => {
    return (
        <div className="carouselImage">
            <img src={url}></img>
        </div>
    );
};
export default carouselImage;