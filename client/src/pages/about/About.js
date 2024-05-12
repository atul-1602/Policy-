import React from 'react'
import Aboutt from '../../assests/about.png'
import SolutionStep from '../../components/solutionsteps/SolutionStep'
import './About.css'

function About() {
  return (
    
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Aboutt} alt="Doctor Group" className="about-image1" />
      </div>
      <div className="about-text-content">
        <h3 className="about-title">
          Why Us
        </h3>
        <p className="about-description">

        Welcome to Policy Plus, your reliable destination for accessible and tailored insurance solutions. Our team
         of seasoned professionals provides online consultations and specialized services, placing your security 
         at the forefront. Partner with us on this path towards a more protected future.
        </p>

        <h4 className="about-text-title">Our Solutions</h4>

        <SolutionStep
          title="Comprehensive Coverage Options"
          description="eamless Specialist Selection: Prioritize Your Health with Tailored Care at Health Plus. Expert Doctors Ensure
           Your Well-being, Offering Personalized Services for an Enhanced Healthcare Experience"
        />

        <SolutionStep
          title="Flexible Insurance Plans"
          description="Customized Appointment Scheduling: Optimal Convenience for Your Well-being,
           Guided by Our Dedicated Medical Professionals' Personalized Care"
        />

        <SolutionStep
          title="Holistic Risk Management Strategies"
          description="Tailored Appointment Coordination: Choose Your Preferred Date and Time for
           Personalized Well-being, Supported by Our Dedicated Medical Professionals at Health Plus."
          />
      </div>
    </div>
  )
}

export default About