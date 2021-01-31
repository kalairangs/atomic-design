import React from 'react';
import Image from "../../atoms/image/image";
import { Props } from "./type";
const logo = ({ url}: Props) => {
    return (
      <div className="logo">
               <Image url="url"/>
      </div>
    );
  };

export default logo;