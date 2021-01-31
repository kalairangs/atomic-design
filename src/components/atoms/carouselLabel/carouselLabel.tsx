import React from 'react';
import { Props } from "./type";

const carouselLabel = ({text }: Props)  => {
  
    return (
             <span className="text-label">{text}</span>   
    );
  };

export default carouselLabel;