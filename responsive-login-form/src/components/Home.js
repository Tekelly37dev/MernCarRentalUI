// pages/Home.js
import React, {useEffect, useState} from "react";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";
import "./home.css"


const Home = () => (
  <div>
    <div className="slider-main">
    <Slider />
    </div>
    <body className="homebody">
    <section className="grid1">
      <div className="img1" />
      <div className="img2" />
      <div className="img3" />
      <div className="strapline">
      </div>
      <div className="cta-wrapper">
        <div className="cta">
          <h1>Luxury Rentals & Maintenance</h1>
          <NavLink className="button" to="/inventory">
              View Product Details →
            </NavLink>
        </div>
      </div>
  </section>
  <section className="section-two">
    placeholder
  </section>
  </body>
  </div>
  
);

export default Home;

