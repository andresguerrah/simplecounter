//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

let Count = 0;
setInterval(() => {
    const cuatro = Math.floor(Count/10000)
    const tres =Math.floor(Count/1000)
    const dos =Math.floor(Count/100)
    const uno =Math.floor(Count/10)
    
}