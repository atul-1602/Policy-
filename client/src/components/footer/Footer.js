import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3><span className="yellow">Yellow</span><span className="blue">dr</span></h3>
        <p className="footer-links">
          <a href="index.html" className="link-1">Home</a>
          <a href="about-us.html">About Us</a>
          <a href="#contact-form">Contact</a>
          <a href="#">Faq</a>
          <a href="whyYellowdr.html">Why <span className="yellow">Yellow</span><span className="blue">dr</span>?</a>
        </p>
        <p className="footer-company-name">Yellowdr © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus
          vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus illo nisi
          enim cupiditate harum.
        </p>
        <div className="footer-icons display-none-l display-block-m">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
