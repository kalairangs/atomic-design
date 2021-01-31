import React from 'react';
import NavBar from "../../organisms/navBar/navBar";
import "./style.css";
import ProductCarousel from '../../organisms/productCarousel/productCarousel';
import { Props } from "./type";

const Home = ({ data }: Props) => {
    return (
        <div className="container">
            <NavBar data={data.navBar} />
            <ProductCarousel data={data.carousel} />
        </div>
    );
};
export default Home;