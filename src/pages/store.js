import React from 'react'
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import { IoIosArrowBack } from "react-icons/io";

export default function store() {
    return (
        <Hero title="SwiftSense" max="true">
          
                <Link to ="/ManagerPage" className="main-link" style={{ margin: "2rem" }}> 
                    Manager
                </Link>
                <Link to ="/RetailerPage" className="main-link" style={{ margin: "2rem" }}> 
                    Retailer
                </Link>
                <br></br>
                <Link to ="/"  style={{ margin: "3rem", color: "white" }}>
                    <IoIosArrowBack> Back</IoIosArrowBack>
                    Back
                </Link>
            
                
        </Hero>
    )
}
