import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/macro_manager.jpeg";
import Contact from "../manager-component/Login";
export default function ManagerPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
