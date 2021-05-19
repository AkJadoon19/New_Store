import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/sales_forecasting_strategies.png";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
            It’s a Sale Amelioration System via Forecasting. “Swift” means “quickly” and “Sense” in terms of “observation”. It means how our system will quickly predict the sales of a franchise company by observing its previous and current data.
            </p>
            <p className="text-lead text-muted my-3">
            The main aim of this system is to replace the existing obsolete system used by the local companies in their sales department. Artificial Intelligence is also a part of this system which assists in Sales Forecasting by increasing the performance of the company. It is developed using MERN stack. The project is managed and deployed using DevOps.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
