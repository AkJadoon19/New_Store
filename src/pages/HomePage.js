import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      
      <Hero title="SwiftSense" max="true">
        <Link to="/admin" className="main-link" style={{ margin: "2rem" }}>
          Admin
        </Link>
        <Link to="/store" className="main-link" style={{ margin: "2rem" }}>
          Store
        </Link>
        <Link to="/manufacture" className="main-link" style={{ margin: "2rem" }}>
          Manufacturer
        </Link>
      </Hero>
    </>
  );
}
