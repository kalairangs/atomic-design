import ItemCarousel from '../../molecules/itemCarousel/itemCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Props } from "./type";

const productCarousel = ({ className, data }: Props)=> {
    return ( 
        <div className="carouselList">
            <Carousel>
            {data.map((item, index) => {
                    return <ItemCarousel   
                    key={index}
                    src={item.src}
                    title={item.title}
                    subTitle={item.subTitle}
                    label1={item.label1}
                    label2={item.label2} />;
                })}
            </Carousel>
        </div> 
    );
};
export default productCarousel;