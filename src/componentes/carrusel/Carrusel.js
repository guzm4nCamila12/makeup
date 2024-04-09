import React from "react";

import imagen01 from './imagen01.jpg'
import imagen02 from './imagen02.jpg'
import imagen03 from './imagen03.jpg'
import imagen04 from './imagen04.jpg'
import imagen05 from './imagen05.webp'
import './carrusel.css'

function Carrusel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-
                    label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner bg-secondary">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={imagen01} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagen02} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen03} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen04} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen05} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carrusel