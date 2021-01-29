import React from 'react';
import './App.css';
import Home from './components/pages/home/home';
import data from "./components/data.json";

let App = () => {
  return(
    <div className = "App">
        <Home data={data}/>
    </div>
  )
}

export default App;
