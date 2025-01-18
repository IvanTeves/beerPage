import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./App.css";

export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <div >
                    <img  id="sdBeige" src="src\assets\images\Imagen3.png" alt="Carousel 1" />                          
                </div>
                <div >
                    <img id="sdRed" src="src\assets\images\banner.png" alt="Carousel 2" />
                </div>
                <div >
                    <img  id="sdCerv"src="src\assets\images\BannerCerveza.jpg" alt="Carousel 3" />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;
