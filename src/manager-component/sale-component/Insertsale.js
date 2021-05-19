import React from "react";
import Title from "../../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Insertsale() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Insert Sale Details" />
          <form
            className="mt-5"
            
            method="POST"
          >

            {/*  QBranch ID */}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Branch Id"
                required
              />
            </div>


            {/* Profit   */}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Profit in PKR"
                required
              />
            </div>

            {/* Loss */}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Loss in PKR"
                required
              />
            </div>

              {/*  Quanitites Sold */}
            <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Quantity Sold"
                required
              />
            </div>

              {/*  Quanitites Left */}
              <div className="form-group">
              <input
                type="number"
                name=""
                className="form-control"
                placeholder="Quantity Left"
                required
              />
            </div>

            {/*  Date */}
            <div className="form-group">
              <input
                type="date"
                name=""
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