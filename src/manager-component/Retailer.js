import React from "react";
import Title from "../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Retailer() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Cashier" />
          <form
            className="mt-5"
            
            method="POST"
          >
           
            {/* Product id */}
            <div className="form-group">
              <input
                type="number"
                name="Product ID"
                className="form-control"
                placeholder="Product ID"
                required
              />
            </div>

            {/* Product quantity*/}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Quantity"
                required
              />
            </div>

             {/* Product Price*/}
             <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Product Price"
                required
              />
            </div>

             {/* Date*/}
             <div className="form-group">
              <input
                type="date"
                name=""
                className="form-control"
                placeholder="Date"
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

       
            <Link to ="/RetailerPage" className="bf">
           <IoIosArrowBack > Back</IoIosArrowBack>
           Back
           </Link>

           
              
          </form>
          
        </div>
      </div>
    </section>
  );
}