import React, { useState } from "react";
import PropTypes from 'prop-types';
import './stepper.scss';

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
      </div>
    );
  }

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">{ steps }</div>
        <div className={`progress-line1 ${currentStep >=1 && "proActive"}`} />
        <div className={`progress-line2 ${currentStep ===2 && "proActive"}`} />
      </div>
      <div>{React.cloneElement(list[currentStep], { onPrev, onNext })}</div>
    </section>
  );
};
Stepper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Stepper;
