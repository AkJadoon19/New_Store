import React from "react";
import Title from "../../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Insertproduct() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Insert Product Details" />
          <form
            className="mt-5"
            
            method="POST"
          >
            {/* Product name  */}
            <div className="form-group">
              <input
                type="text"
                name="Product Name"
                className="form-control"
                placeholder="Product Name"
                required
              />
            </div>

            {/*  Product Price */}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Product Price in PKR"
                required
              />
            </div>

            {/* ID Number */}
            <div className="form-group">
              <input
                type="number"
                name="ID Number"
                className="form-control"
                placeholder="ID Number"
                required
              />
            </div>
              {/* Quantity */}
            <div className="form-group">
              <input
                type="number"
                name="Quantity"
                className="form-control"
                placeholder="Quantity"
                required
              />
            </div>



            {/* Date */}
            <div className="form-group">
              <input
                type="date"
                name="Date"
                className="form-control"
                placeholder=""
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

       
            <Link to ="/OptionPage" className="bf">
           <IoIosArrowBack > Back</IoIosArrowBack>
           Back
           </Link>

          
          </form>
          
        </div>
      </div>
    </section>
  );
}
