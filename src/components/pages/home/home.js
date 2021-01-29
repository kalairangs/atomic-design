import React from 'react';
import NavBar from "../../organisms/navBar/navBar";
import "./style.css";


const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <NavBar data={props.data}/>
        </div>
    );
};

export default Home;