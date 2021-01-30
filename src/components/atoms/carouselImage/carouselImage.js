import React from 'react';

const carouselImage = (props) => {
    return (
        <div className="carouselImage">
            <img src={props.url}></img>
        </div>
    );
};
export default carouselImage;