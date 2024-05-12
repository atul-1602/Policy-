import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import  "./SolutionSteps.css"
function SolutionStep(props) {
  return (
    <>
  
      <p className="about-text-sTitle">
        
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        
      </p>
      <p className="about-text-description">{props.description}</p>
      </>
  );
}

export default SolutionStep;