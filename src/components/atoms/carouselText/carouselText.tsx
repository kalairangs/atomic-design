import React from 'react';
import { Props } from "./type";

const carouselText =  ({text }: Props) => {
  if (!text) return null;

  function createMarkup() {
    if (text) return { __html: text };
    else return { __html: "" };
  }
    return (
      <div className="caroTitle">
            {text}    
      </div>
    );
  };
export default carouselText;