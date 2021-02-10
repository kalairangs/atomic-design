import React from 'react';
import Label from '../../atoms/label/label';
import Title from '../../atoms/title/title';
import Text from '../../atoms/text/text';
import "./style.css"
import Image from '../../atoms/image/image';

const itemCarousel = (props) => {
  return (<div className="carouselItem">
            <div className="carouselContent">
                <div className="caroTitle"><Text title={props.item.title} /></div>
                                            <Title title={props.item.subTitle} />
                    <div><Label name={props.item.label1} />
                          <Label name={props.item.label2} />
                    </div>
              </div>
                <div className="carouselImage"> <Image url={props.item.src} /> </div>
          </div>);
};

export default itemCarousel;