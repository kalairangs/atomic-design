import React from 'react';

import CarouselImage from '../../atoms/carouselImage/carouselImage';
import CarouselText from '../../atoms/carouselText/carouselText';
import CarouselSubTitle from '../../atoms/carouselSubTitle/carouselSubTitle';
import CarouselLabel from '../../atoms/carouselLabel/carouselLabel';
import { Props } from "./type";

const itemCarousel = ({
  src,
  title,
  subTitle,
  label1,
  label2
}: Props) => {

  return (<div className="carouselItem">
    <div className="carouselContent">
      <CarouselText text={title} />
      <CarouselSubTitle text={subTitle}/>
      <div><CarouselLabel text={label1}/>
      <CarouselLabel text={label2}/></div>
    </div>
    <div className="carouselImage"> <CarouselImage url={src} /> </div>
  </div>);
};

export default itemCarousel;
export * from "./type";