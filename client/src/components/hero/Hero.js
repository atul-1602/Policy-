import React, { useEffect, useState } from "react";
import Doctor from '../../assests/main2.png'
import './Hero.css'
import { Link } from "react-router-dom";


const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {     
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    // navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Safety comes first</p>
          <h2 className="text-title">
            Find your Policy and make You and Your Family Safe
          </h2>
          <p className="text-descritpion">
            Talk to online advisors and get policy advice, online solutions,
            refills and medical notes within minutes. On 
          demand Life Insuranaces and services at your fingertips.
          </p>
          <Link to ="/policies">
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
            >
            Explore A Policy
          </button>
            </Link>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Expert Policies</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Advisors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        Scroll Up
      </div>
    </div>
  );
}


export default Hero