import React from 'react';
import CarouselImage from '../../atoms/carouselImage/carouselImage';
import CarouselText from '../../atoms/carouselText/carouselText';
import CarouselSubTitle from '../../atoms/carouselSubTitle/carouselSubTitle';
import CarouselLabel from '../../atoms/carouselLabel/carouselLabel';

const itemCarousel = (props) => {
  return (<div className="carouselItem">
    <div className="carouselContent">
      <CarouselText title={props.item.title} />
      <CarouselSubTitle title={props.item.subTitle}/>
      <div><CarouselLabel name={props.item.label1}/>
      <CarouselLabel name={props.item.label2}/></div>
    </div>
    <div className="carouselImage"> <CarouselImage url={props.item.src} /> </div>
  </div>);
};

export default itemCarousel;