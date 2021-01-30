import ItemCarousel from '../../molecules/itemCarousel/itemCarousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const productCarousel = (props) => {

    return (
        <div className="carouselList">
            <Carousel>
            {props.data.carousel.map((item, index) => {
                    return <ItemCarousel item={item}/>;
                })}

            </Carousel>
        </div>
    );
};

export default productCarousel;