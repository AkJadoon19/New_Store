import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/retail.jpg";
import Contact from "../manager-component/retailer-login";
export default function RetailerPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
