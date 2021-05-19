import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/sales_forecasting_strategies.png";
import Particles from 'react-particles-js';
import "../App.css";
export default function AboutPage() {
  return (
    <>
      {/* <Hero img={aboutBcg} /> */}
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 80
              },
              "size": {
                  "value": 2
              },
              "color": {
                "value": "black"
            },
            line_linked: {
              color: '#252927',
              opacity: 1
            }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} className="partcle" />
      <Info />
    </>
  );
}
