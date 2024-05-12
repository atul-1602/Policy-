import React, { useState, useEffect } from "react"; // Combined import
import { connect } from "react-redux";
import { loadDataSuccess } from "../../redux/action/Action";
import Rating from "@mui/material/Rating";

import "./Policy.css";

const Policy = ({ loadDataSuccess, insuranceData }) => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    // Handle booking confirmation logic here
    console.log("Booking confirmed for", selectedDate, "at", selectedTime);
    // Reset selected date and time
    setSelectedDate("");
    setSelectedTime("");
    // Hide booking section
    setShowBooking(false);
  };
  console.log(insuranceData);

  useEffect(() => {
    // Load data from JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => loadDataSuccess(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []); // Removed loadDataSuccess from dependency array

  if (!insuranceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {insuranceData.map((insurance, index) => (
        <card className="policy-card">
          <section className="left-section">
            <img src={insurance.image} />
            <p> <span>Company :</span> {insurance.compnay_name}</p>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              style={{ color: "blue" }}
            />
          </section>
          <section className="right-section">
            <div className="buynow">
              <h2> {insurance.insurance_name}</h2>
              <h3>Type : {insurance.type}</h3>
              <h1>At Just -  <span>{insurance.rupees}</span> <span>/ p.m</span></h1>
              <button className="btn">
                <span>Buy Policy</span>
              </button>
            </div>
            <hr />
            <div className="details">
              <h4>Documents-</h4>
              <ul>
                <li>{insurance.document_list}</li>
              </ul>

              <h4>For - {insurance.time_period} years</h4>
              <button className="details-btn" >
                <span>View More</span>
              </button>
            </div>
          </section>
        </card>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  insuranceData: state.data,
});

const mapDispatchToProps = {
  loadDataSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Policy);
