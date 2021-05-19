import React from "react";
import Title from "../../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Addretailer() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Remove Reatiler Details" />
          <form
            className="mt-5"
            
            method="POST"
          >
            {/* Retailer name  */}
            <div className="form-group">
              <input
                type="text"
                name="Reatiler Name"
                className="form-control"
                placeholder="Retailer Name"
                required
              />
            </div>

            {/* Reatiler ID  */}
            <div className="form-group">
              <input
                type="number"
                name="ID Number"
                className="form-control"
                placeholder="Retailer ID"
                required
              />
            </div>

              {/* Retailer Email */}
            <div className="form-group">
              <input
                type="email"
                name="Retailer Email"
                className="form-control"
                placeholder="Retailer Email"
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