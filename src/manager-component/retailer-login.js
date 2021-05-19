import React from "react";
import Title from "../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Retailerlogin() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Reatiler Login" />
          <form
            className="mt-5"
            
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                required
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="password"
                name="Password"
                className="form-control"
                placeholder="xxxxxx"
                required
              />
            </div>
           
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Submit"
                className="form-control bg-primary text-white"
              />
            </div>

       
            <Link to ="/store" className="bf">
           <IoIosArrowBack > Back</IoIosArrowBack>
           Back
           </Link>

           <Link to ="/Retailer" className="bf">
             Forward
             <IoIosArrowForward> Forward </IoIosArrowForward>
           </Link>   
              
          </form>
          
        </div>
      </div>
    </section>
  );
}