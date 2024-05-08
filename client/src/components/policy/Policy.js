import React, { useState } from 'react';
import './Policy.css'; 


const Policy = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    // Handle booking confirmation logic here
    console.log('Booking confirmed for', selectedDate, 'at', selectedTime);
    // Reset selected date and time
    setSelectedDate('');
    setSelectedTime('');
    // Hide booking section
    setShowBooking(false);
  };

  return (
    <div className="policy-card">
      <div className="doctor-photo">
        <img src="images/images.jpeg" alt="Policy Image" />
        <div className="none" id="bookadd">
          <p>At <b>Cannot Place.</b> </p>
          <p><i className="fa fa-map-marker"></i> <b>Delhi</b></p>
        </div>
      </div>
      <div className="doctor-details">
        <h1>Mast Wail Policy</h1>
        <p><b>Policy Company</b></p>
        <p>Policy Featues yaha likho</p>
        <p>Validity Years of Policy</p>
        <div className="days-avlm">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
        <h2 id="bookp" className="none">&#x20b9; 499/-</h2>
      </div>
      <div className="payment-details">
        <p>At <b>Cannot Place.</b> </p>
        <p><i className="fa fa-map-marker"></i> <b>Delhi</b></p>
        <h2>&#x20b9; 499/-</h2>
        <div id="bookbtn6">
          <button onClick={() => setShowBooking(true)}>
            Book Policy<p>No Booking Fee</p>
          </button>
        </div>
        {showBooking && (
          <div id="booksec6" className="confirmbook">
            <h2>Select Date and Time of Booking</h2>
            <form onSubmit={handleConfirmBooking}>
              <label htmlFor="date">Select Date</label>
              <input type="date" id="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
              <br />
              <label htmlFor="time">Select Time</label>
              <input type="time" id="time" name="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
              <br />
              <p>*Booking Confirmation will be sent to phone of 15 minutes, +/- 30 minutes.</p>
              <div>
                <input type="submit" value="CONFIRM" id="submit" />
                <button onClick={() => setShowBooking(false)}>CANCEL</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Policy;
