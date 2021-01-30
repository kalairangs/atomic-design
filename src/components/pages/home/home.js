import React from 'react';
import NavBar from "../../organisms/navBar/navBar";
import "./style.css";
import ProductCarousel from '../../organisms/productCarousel/productCarousel';


const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <NavBar data={props.data} />
            <ProductCarousel data={props.data} />
        </div>
    );
};

export default Home;