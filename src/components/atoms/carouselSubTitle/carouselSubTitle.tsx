import React from 'react';
import { Props } from "./type";

const carouselSubTitle =  ({text }: Props)  => {
  if (!text) return null;

  function createMarkup() {
    if (text) return { __html: text };
    else return { __html: "" };
  }
    return (
      <div className="subTitle">
              {text}  
      </div>
    );
  };

export default carouselSubTitle;