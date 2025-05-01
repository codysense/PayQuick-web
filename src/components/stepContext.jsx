import React, { createContext, useState } from "react";

const stepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const redoStep = () => {
    setStep(1);
  };

  const gotoStep = (step) => {
    setStep(step);
  };

  return (
    <stepContext.Provider
      value={{ step, prevStep, nextStep, redoStep, gotoStep }}
    >
      {children}
    </stepContext.Provider>
  );
};

export default stepContext;
