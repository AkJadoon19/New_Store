import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/sales.jpg";
import Contact from "../manager-component/manager";
import Particles from 'react-particles-js';

export default function OptionPage() {
  return (
    <>
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 60
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
         
      }} className="partcle" />
      <Contact />
    </>
  );
}
